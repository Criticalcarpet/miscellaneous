// Execution file

import 'dotenv/config'
import fs from 'fs'
import Logger from './util/logger.js'
import { fileAction, directory } from './util/prompts.js'
import { timeout } from './util/timeout.js'

const logger = new Logger('shell', true, true)

logger.info(`Starting app in ${process.env.NODE_ENV} mode...`)
await timeout(1500)
const dirFile = await directory()
const { source, destination } = dirFile
console.log(source, destination)
if (!fs.existsSync(source) || fs.existsSync(destination)) {
  logger.error('Source or destination directory does not exist')
  process.exit(1)
}
const action = await fileAction()
console.log(dirFile, action)
