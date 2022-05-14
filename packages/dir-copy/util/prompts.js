
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const inquirer = require('inquirer')

export const fileAction = async () => {
  const response = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Copy Files',
          value: 'copy'
        },
        {
          name: 'Move Files',
          value: 'move'
        },
        {
          name: 'Exit',
          value: 'exit'
        }
      ]
    }
  ])
  return response
}
