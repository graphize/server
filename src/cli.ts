#!/usr/bin/env node

import color from 'kleur'
import clear from 'clear'
import figlet from 'figlet'
import yargs from 'yargs'
import box from 'boxen'

import express from 'express'
import atob from 'atob'
import cors from 'cors'
import { getTex, getText } from '.'
import { createTempFolder } from './helper'

async function main() {
  const { argv } = yargs(process.argv.slice(2)).options({
    port: { type: 'number', default: 3000, description: 'Port number to serve TeX files', alias: 'p' },
    verbose: { type: 'boolean', default: false, description: 'Run with more logs', alias: 'v', boolean: true },
  })
  const log = argv.verbose

  if (log) {
    clear()
    console.log(color.blue(figlet.textSync(`Graphize`, '3D-ASCII')))
  }

  createTempFolder()

  const port = process.env.PORT || 3000
  const app = express()
  app.use(cors())

  app.get('/tex/:code', async (req, res) => {
    const expression = atob(req.params.code.toString())
    if (log) console.log(`Compiling TeX ${color.green(expression)}`)

    const svg = await getTex(expression)
    res.send(svg)
  })

  app.get('/text/:code', async (req, res) => {
    const expression = atob(req.params.code.toString())
    if (log) console.log(`Compiling Text ${color.green(expression)}`)

    const svg = await getText(expression)
    res.send(svg)
  })

  app.listen(port, () =>
    console.log(
      log
        ? color.green(box(`Starting server on port ${color.underline().bold(argv.port)}...`, { align: 'center', padding: 2, margin: 4 }))
        : `Starting server on port ${argv.port}...`
    )
  )
}

main()
