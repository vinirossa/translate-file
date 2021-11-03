import fs from 'fs'
import path from 'path'

function getAbsolutePath(file: string): string {
  return path.resolve(__dirname, file)
}

function getFileInfo(file: string): path.ParsedPath {
  return path.parse(getAbsolutePath(file))
}

function createFilePath(fileObj: path.FormatInputPathObject): string {
  return path.format(fileObj)
}

function checkExistence(file: string): boolean {
  return fs.existsSync(file)
}

function readFile(
  file: string,
  encoding: BufferEncoding = 'utf8'
): string | boolean {
  try {
    return fs.readFileSync(file, encoding)
  } catch (err) {
    console.log(err)
    return false
  }
}

function writeFile(
  file: string,
  data: string,
  encoding: BufferEncoding = 'utf8'
): boolean {
  try {
    fs.writeFileSync(file, data, encoding)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

function deleteFile(file: string): boolean {
  try {
    fs.unlinkSync(file)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export default {
  getAbsolutePath,
  getFileInfo,
  createFilePath,
  checkExistence,
  readFile,
  writeFile,
  deleteFile
}
