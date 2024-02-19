import {readFileSync, writeFileSync } from 'fs'
import path from 'path'

(() => {
  const jsonPath = path.join(process.cwd(), `dist`, 'package.json')
  const json = JSON.parse(readFileSync(jsonPath, { encoding: "utf-8" }))
  const splitted = json.version.split('.')
  splitted[2]++
  json.version = splitted.join('.')
  writeFileSync(jsonPath, JSON.stringify(json, null, 2))
  console.log("version updated!");
})()