import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs'
import _ from 'lodash'
import path from 'path'

type AssetType = { class: string; tag: string; html: string }
type AssetCollectionType = { icons: AssetType[]; illustrations: AssetType[] }
type ChangeLogType = AssetCollectionType & { version: string }

const dirPath = path.join(process.cwd(), 'assets')
const template = readFileSync(`${dirPath}/single-template.txt`, { encoding: "utf-8" })


const parseFileContent = (arg: Record<string, string>, template: string) => {
  for (const key in arg) {
    const regex = new RegExp(`{{!! ${key} !!}}`, 'g')
    template = template.replace(regex, arg[key])
  }
  return template
}

const updateIndex = (type: string, componentName: string, className: string) => {
  const filePath = path.join(process.cwd(), `index.ts`)
  let content = readFileSync(filePath, { encoding: "utf-8" })
  content += `\nwindow.customElements.define("talentics-${type}-${componentName}", require('./${type}/${className}').default)`
  writeFileSync(filePath, content)
}

const generateComponents = (type: 'icons' | 'illustrations') => {
  const illustrationsDirPath = path.join(dirPath, type)
  const dir = readdirSync(illustrationsDirPath)
  const metadata: AssetType[] = []
  dir.forEach(f => {
    const filename = f.split('.')[0]
    const CLASSNAME = _.startCase(_.toLower(filename)).replace(new RegExp(' ', 'g'), '');
    const COMPONENT_NAME = _.kebabCase(filename)
    const html = readFileSync(`${dirPath}/${type}/${f}`, { encoding: "utf-8" })
    let CONTENT = parseColor(parseSize(html))

    const file = parseFileContent({ CLASSNAME, COMPONENT_NAME, CONTENT }, template)
    writeFileSync(path.join(process.cwd(), type, `${CLASSNAME}.ts`), file)

    updateIndex(type, COMPONENT_NAME, CLASSNAME)
    metadata.push({ class: CLASSNAME, tag: `talentics-${type}-${COMPONENT_NAME}`, html })
  })
  return metadata
}

const parseSize = (content: string) => {
  const regex = new RegExp("<svg ", 'g')
  return content.replace(regex, '<svg style="${this.contentStyle}" ')
}

const parseColor = (content: string) => {
  ['path', 'ellipse'].forEach(v => {
    const regex = new RegExp(`<${v} `, 'g')
    content = content.replace(regex, `<${v} ` + 'style="${this.colorStyle}" ')
  })
  return content
}

const generateAllComponents = (): AssetCollectionType => {
  const icons = generateComponents("icons")
  const illustrations = generateComponents("illustrations")
  const metadata = { icons, illustrations }
  return metadata
}

const deleteDir = (directory: string) => {
  const dirPath = path.join(process.cwd(), directory)
  readdirSync(dirPath).forEach(f => unlinkSync(path.join(dirPath, f)))
}

const deleteAll = () => {
  deleteDir('icons')
  deleteDir('illustrations')
}

const upgradePackageVersion = (metadata: AssetCollectionType) => {
  const packagePath = path.join(process.cwd(), `dist`, 'package.json')
  const json = JSON.parse(readFileSync(packagePath, { encoding: "utf-8" }))
  const version = json.version.split('.')
  version[2]++
  json.version = version.join('.')
  const isChange = updateChangelog(json.version, metadata)
  if (isChange) {
    const stringified = JSON.stringify(json, null, 2)
    writeFileSync(packagePath, stringified, { encoding: "utf-8" })
  }
  const indexPath = path.join(process.cwd(), `index.ts`)
  const content = readFileSync(indexPath, { encoding: "utf-8" }) + "\n\nexport { default as metadata } from './dist/changelog.json'"
  writeFileSync(indexPath, content, { encoding: "utf-8" })
}

const updateChangelog = (version: string, metadata: AssetCollectionType) => {
  const { icons, illustrations } = metadata
  const changelogPath = path.join(process.cwd(), `dist`, 'changelog.json')
  const changelog: ChangeLogType[] = JSON.parse(readFileSync(changelogPath, { encoding: "utf-8" }))
  let isChange = true
  if (changelog.length) {
    const latest = _.omit(changelog[changelog.length - 1], 'version')
    isChange = JSON.stringify(latest) !== JSON.stringify(metadata)
  }
  if (isChange) {
    changelog.push({ version, icons, illustrations })
    writeFileSync(changelogPath, JSON.stringify(changelog, null, 2), { encoding: "utf-8" })
  }
  return isChange
}

const init = () => {
  writeFileSync(path.join(process.cwd(), `index.ts`), '')
  deleteAll()
  const metadata = generateAllComponents()
  upgradePackageVersion(metadata)
}

init()