import { dviToSvg, generateTexFile, texToDvi, TexFiles } from './tex'
import { createTempFolder } from './helper'
import { readFile } from 'fs-extra'
import { templateTexFile, templateTextFile } from './constants'

export async function getTex(expression: string) {
  const texFile = await generateTexFile(expression, templateTexFile)
  const dviFile = await texToDvi(texFile)
  const svgFile = await dviToSvg(dviFile)
  const svg = (await readFile(svgFile)).toString()
  return svg
}
export async function getText(expression: string) {
  const texFile = await generateTexFile(expression, templateTextFile)
  const dviFile = await texToDvi(texFile)
  const svgFile = await dviToSvg(dviFile)
  const svg = (await readFile(svgFile)).toString()
  return svg
}

export { TexFiles, createTempFolder, templateTexFile, templateTextFile }
