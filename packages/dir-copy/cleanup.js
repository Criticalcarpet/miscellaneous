// To cleanup the test folder

import fs from 'fs'

fs.rmSync('test/dist/', { recursive: true })
fs.mkdirSync('test/dist/')
