import fs from 'fs'

function checkExistence(file: string): boolean {
  return fs.existsSync(file)
}

function readFile(file: string, encoding: BufferEncoding = 'utf8'): string {
  return fs.readFileSync(file, encoding)
}

function writeFile(
  file: string,
  data: string,
  encoding: BufferEncoding = 'utf8'
): boolean {
  try {
    fs.writeFileSync(file, data, encoding)
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}

function deleteFile(file: string): boolean {
  try {
    fs.unlinkSync(file)
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}

export { checkExistence, readFile, writeFile, deleteFile }
