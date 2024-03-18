import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs'
import path from 'path'
import _ from 'lodash'

type AssetType = { class: string; tag: string; html: string }
type AssetCollectionType = { icons: AssetType[]; illustrations: AssetType[]; coloredIcons: AssetType[]; iconIllustrations: AssetType[] }
type ChangeLogType = AssetCollectionType & { version: string }

const dirPath = path.join(process.cwd(), 'assets')
const template = readFileSync(`${dirPath}/single-template.txt`, { encoding: "utf-8" })
const vueTemplate = readFileSync(`${dirPath}/vue-template.txt`, { encoding: "utf-8" })


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

const generateComponents = (type: 'icons' | 'illustrations' | 'colored-icons' | 'icon-illustrations') => {
  const illustrationsDirPath = path.join(dirPath, type)
  const dir = readdirSync(illustrationsDirPath)
  const metadata: AssetType[] = []
  dir.forEach(f => {
    const filename = f.split('.')[0]
    const CLASSNAME = _.startCase(_.toLower(filename)).replace(new RegExp(' ', 'g'), '');
    const COMPONENT_NAME = _.kebabCase(filename)
    const html = readFileSync(`${dirPath}/${type}/${f}`, { encoding: "utf-8" })
    let CONTENT = parseSize(html)
    if (type === 'icons') CONTENT = parseColor(CONTENT)

    const file = parseFileContent({ CLASSNAME, COMPONENT_NAME, CONTENT }, template)
    const vueFile = parseFileContent({ CLASSNAME, COMPONENT_NAME, CONTENT }, vueTemplate)
    writeFileSync(path.join(process.cwd(), type, `${CLASSNAME}.ts`), file)
    writeFileSync(path.join(process.cwd(), 'Vue', type, `${CLASSNAME}.vue`), vueFile)

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
    const regex = new RegExp(`<${v}`, 'g')
    content = content.replace(regex, `<${v} ` + 'style="${this.colorStyle}" ')
  })
  return content
}

const generateAllComponents = (): AssetCollectionType => {
  const icons = generateComponents("icons")
  const illustrations = generateComponents("illustrations")
  const coloredIcons = generateComponents("colored-icons")
  const iconIllustrations = generateComponents("icon-illustrations")
  const metadata = { icons, illustrations, coloredIcons, iconIllustrations }
  return metadata
}

const deleteDir = (directory: string) => {
  const dirPath = path.join(process.cwd(), directory)
  readdirSync(dirPath).forEach(f => unlinkSync(path.join(dirPath, f)))
}

const deleteAll = () => {
  writeFileSync(path.join(process.cwd(), `index.ts`), '')
  deleteDir('icons')
  deleteDir('illustrations')
  deleteDir('colored-icons')
  deleteDir('icon-illustrations')
  deleteDir('Vue/icons')
  deleteDir('Vue/illustrations')
  deleteDir('Vue/colored-icons')
  deleteDir('Vue/icon-illustrations')
}

const updateChangelog = (metadata: AssetCollectionType) => {
  const jsonPath = path.join(process.cwd(), `dist`, 'package.json')
  const json = JSON.parse(readFileSync(jsonPath, { encoding: "utf-8" }))
  const version = json.version
  const changelogPath = path.join(process.cwd(), `dist`, 'changelog.json')
  const changelog: ChangeLogType[] = JSON.parse(readFileSync(changelogPath, { encoding: "utf-8" }))
  let isChange = true
  if (changelog.length) {
    const latest = _.omit(changelog[changelog.length - 1], 'version')
    isChange = JSON.stringify(latest) !== JSON.stringify(metadata)
  }
  
  if (!!changelog.find(c => c.version === version)) throw `Version ${version} already exists!`
  else if (isChange) {
    changelog.push({ version, ...metadata })
    writeFileSync(changelogPath, JSON.stringify(changelog, null, 2), { encoding: "utf-8" })
  }
  else throw 'No changes applied, please make changes before build and publish package'
}

const init = () => {
  deleteAll()
  const metadata = generateAllComponents()
  updateChangelog(metadata)
}

init()