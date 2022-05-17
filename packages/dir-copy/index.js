// Execution file

import 'dotenv/config'
// import fs from 'fs'
import Logger from './util/logger.js'
import { fileAction, directory, sourceStructure } from './util/prompts.js'
import { copyFiles } from './util/files.js'

const logger = new Logger('shell', true, true)

logger.info(`Starting app in ${process.env.NODE_ENV} mode...`)
const dirFile = await directory()
const { source, destination } = dirFile
/* if (!fs.existsSync(source) || !fs.existsSync(destination)) {
  logger.error('Source or destination directory does not exist')
  process.exit(1)
} */
const action = await fileAction()
const { structure } = await sourceStructure()
switch (action.action) {
  case 'copy':
    logger.info('Copying files...')
    console.time('Copying files')
    await copyFiles(source, destination, structure)
    break
  case 'move':
    logger.info('Moving files...')
    break
  case 'exit':
    logger.info('Exiting...')
    process.exit(0)
}
