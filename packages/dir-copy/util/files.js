// Actions to be carried on after filePrompt
import { readdir, copyFile, mkdir } from 'fs/promises'

export const copyFiles = async (source, destination, structure) => {
  if (structure) {
    const directory = await readdir(source, { withFileTypes: true })
    for (const dirent of directory) {
      if (dirent.isDirectory()) {
        await mkdir(`${destination}/${dirent.name}`, { recursive: true })
        await copyFiles(`${source}/${dirent.name}`, `${destination}/${dirent.name}`, structure)
      }
      await copyFile(`${source}/${dirent.name}`, `${destination}/${dirent.name}`)
    }
  } else {
    await copyFile(source, destination)
  }
}
