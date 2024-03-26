import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs'
import path from 'path'
import _ from 'lodash'

type AssetType = { class: string; tag: string; html: string }
type AssetCollectionType = { iconSystem: AssetType[]; illustrationAsset: AssetType[]; iconSpecialCase: AssetType[]; iconIllustration: AssetType[] }
type ChangeLogType = AssetCollectionType & { version: string }
type IconType = 'icon-system' | 'illustration-asset' | 'icon-special-case' | 'icon-illustration'

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

const updateIndex = (type: string, tag: string, className: string) => {
  const filePath = path.join(process.cwd(), `index.ts`)
  let content = readFileSync(filePath, { encoding: "utf-8" })
  content += `\nwindow.customElements.define("${tag}", require('./${type}/${className}').default)`
  writeFileSync(filePath, content)
}

const generateComponents = (type: IconType) => {
  const illustrationsDirPath = path.join(dirPath, type)
  const dir = readdirSync(illustrationsDirPath)
  const metadata: AssetType[] = []
  dir.forEach(f => {
    const filename = f.split('.')[0]
    const CLASSNAME = _.startCase(_.toLower(filename)).replace(new RegExp(' ', 'g'), '');
    const COMPONENT_NAME = _.kebabCase(filename)
    const html = readFileSync(`${dirPath}/${type}/${f}`, { encoding: "utf-8" })
    let CONTENT = parseSize(html)
    let VUE_CONTENT = parseSize(html, true)
    if (type === 'icon-system') {
      CONTENT = parseColor(CONTENT)
      VUE_CONTENT = parseColor(VUE_CONTENT, true)
    }

    const file = parseFileContent({ CLASSNAME, COMPONENT_NAME, CONTENT }, template)
    const vueFile = parseFileContent({ CLASSNAME, COMPONENT_NAME, CONTENT: VUE_CONTENT }, vueTemplate)
    writeFileSync(path.join(process.cwd(), type, `${CLASSNAME}.ts`), file)
    writeFileSync(path.join(process.cwd(), 'Vue', type, `${CLASSNAME}.vue`), vueFile)
    
    let typeTag = type.split('-').map(v => v[0]).join('')
    const tag = `talentics-${typeTag}-${COMPONENT_NAME}`

    updateIndex(type, tag, CLASSNAME)
    metadata.push({ class: CLASSNAME, tag, html })
  })
  return metadata
}

const parseSize = (content: string, vue = false) => {
  const regex = new RegExp("<svg ", 'g')
  let replacer = '<svg style="${this.contentStyle}" '
  if (vue) replacer = '<svg :style="contentStyle" '
  return content.replace(regex, replacer)
}

const parseColor = (content: string, vue = false) => {
  const fillRegex = new RegExp('fill=\"(.*?)\"', 'g')
  content = content.replace(fillRegex, '')
  let replacer = 'style="${this.colorStyle}" '
  if (vue) replacer = ':style="colorStyle" '
  const el = ['path', 'ellipse']
  el.forEach(v => {
    const regex = new RegExp(`<${v}`, 'g')
    content = content.replace(regex, `<${v} ` + replacer)
  })
  return content
}

const generateAllComponents = (): AssetCollectionType => {
  const iconSystem = generateComponents('icon-system')
  const illustrationAsset = generateComponents("illustration-asset")
  const iconSpecialCase = generateComponents("icon-special-case")
  const iconIllustration = generateComponents("icon-illustration")
  const metadata = { iconSystem, illustrationAsset, iconSpecialCase, iconIllustration }
  return metadata
}

const deleteDir = (directory: string) => {
  const dirPath = path.join(process.cwd(), directory)
  readdirSync(dirPath).forEach(f => unlinkSync(path.join(dirPath, f)))
}

const deleteAll = () => {
  writeFileSync(path.join(process.cwd(), `index.ts`), '')
  deleteDir('icon-system')
  deleteDir('illustration-asset')
  deleteDir('icon-special-case')
  deleteDir('icon-illustration')
  deleteDir('Vue/icon-system')
  deleteDir('Vue/illustration-asset')
  deleteDir('Vue/icon-special-case')
  deleteDir('Vue/icon-illustration')
}

const updateChangelog = (metadata: AssetCollectionType) => {
  const jsonPath = path.join(process.cwd(), `dist`, 'package.json')
  const json = JSON.parse(readFileSync(jsonPath, { encoding: "utf-8" }))
  const version = json.version
  const changelogPath = path.join(process.cwd(), 'changelog.json')
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