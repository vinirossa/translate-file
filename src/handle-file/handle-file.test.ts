import path from 'path'
import handleFile from './handle-file'

describe('Test File Path Functions', () => {
  it('should return true since it is an absolute path', () => {
    const absolutePath = handleFile.getAbsolutePath('..\\..\\package.json')
    expect(path.isAbsolute(absolutePath)).toBe(true)
  })

  it('should return the correct information about the file path', () => {
    const fileInfo = handleFile.getFileInfo('..\\..\\package.json')

    if (fileInfo instanceof Object) {
      expect(
        fileInfo.base === 'package.json' &&
          fileInfo.ext === '.json' &&
          fileInfo.name === 'package'
      ).toBe(true)
    }
  })

  it('should create the same file path as expected', () => {
    const filePath = handleFile.createFilePath({
      dir: 'C:\\Dev\\Web',
      base: 'README.md',
      ext: '.md',
      name: 'README'
    })
    if (typeof filePath === 'string') {
      expect(filePath.replace('/', '\\')).toBe('C:\\Dev\\Web\\README.md')
    }
  })
})

describe('Create, Read and Delete Mock File with UTF-8', () => {
  const mockFile = 'mock.txt'
  const data = 'This is a test.'
  const newData = 'This is a new test.'
  const encoding = 'utf8'

  it('should create a mock file with UTF-8 encoding', () => {
    expect(handleFile.writeFile(mockFile, data, encoding)).toBe(true)
  })

  it('should confirm that the mock file exists', () => {
    expect(handleFile.checkExistence(mockFile)).toBe(true)
  })

  it('should read the mock file data with UTF-8 encoding', () => {
    expect(handleFile.readFile(mockFile, encoding)).toBe(data)
  })

  it('should overwrite the mock file data with UTF-8 encoding', () => {
    expect(handleFile.writeFile(mockFile, newData, encoding)).toBe(true)
  })

  it('should read the mock file new data with UTF-8 encoding', () => {
    expect(handleFile.readFile(mockFile, encoding)).toBe(newData)
  })

  it('should delete the mock file', () => {
    expect(handleFile.deleteFile(mockFile)).toBe(true)
  })

  it("should confirm that the mock file doesn't exist", () => {
    expect(handleFile.checkExistence(mockFile)).toBe(false)
  })
})

describe('Test Functions Error Handling ', () => {
  const mockFile = 'mock.txt'
  const data = 'This is a test.'
  const encoding = 'utf8'

  it('should return false when trying to read a non-existent file', () => {
    expect(handleFile.readFile('')).toBe(false)
  })

  it('should return false when trying to create a file with invalid name', () => {
    expect(handleFile.writeFile(mockFile + ':/', data, encoding)).toBe(false)
  })

  it("should return false when trying to delete a file that doesn't exist", () => {
    expect(handleFile.deleteFile(mockFile)).toBe(false)
  })
})
