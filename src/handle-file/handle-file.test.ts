import { checkExistence, readFile, writeFile, deleteFile } from './handle-file'

describe('Handle Mock File with UTF-8', () => {
  const mockFile = 'mock.txt'
  const data = 'This is a test.'
  const newData = 'This is a new test.'
  const encoding = 'utf8'

  it('should create a mock file with UTF-8 encoding', () => {
    expect(writeFile(mockFile, data, encoding)).toBe(true)
  })

  it('should confirm that the mock file exists', () => {
    expect(checkExistence(mockFile)).toBe(true)
  })

  it('should read the mock file data with UTF-8 encoding', () => {
    expect(readFile(mockFile, encoding)).toBe(data)
  })

  it('should overwrite the mock file data with UTF-8 encoding', () => {
    expect(writeFile(mockFile, newData, encoding)).toBe(true)
  })

  it('should read the mock file new data with UTF-8 encoding', () => {
    expect(readFile(mockFile, encoding)).toBe(newData)
  })

  it('should delete the mock file', () => {
    expect(deleteFile(mockFile)).toBe(true)
  })

  it("should confirm that the mock file doesn't exist", () => {
    expect(checkExistence(mockFile)).toBe(false)
  })
})
