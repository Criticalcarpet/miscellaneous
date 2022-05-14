// Execution file

import 'dotenv/config'
import Logger from './util/logger.js'
import { fileAction } from './util/prompts.js'

const logger = new Logger('shell', true, true)

logger.info(`Starting app in ${process.env.NODE_ENV} mode...`)
const action = await fileAction()
console.log(action.action)
