// All the prompts used in the CLI

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

export const directory = () => {
  const response = inquirer.prompt([
    {
      type: 'input',
      name: 'source',
      message: 'Enter the parent directory(full path)'
    },
    {
      type: 'input',
      name: 'destination',
      message: 'Enter the destination directory(full path)'
    }
  ])
  return response
}

export const sourceStructure = () => {
  const response = inquirer.prompt([
    {
      type: 'confirm',
      name: 'structure',
      message: 'Do you want to maintain the structure of the source directory?'
    }
  ])
  return response
}
