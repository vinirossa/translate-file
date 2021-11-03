import { translateFile } from './index'
import handleFile from './handle-file/handle-file'

describe('Test Translate File Function', () => {
  it('should translate CHANGELOG.md file to Portuguese and save with default name', async () => {
    const result = await translateFile('../../CHANGELOG.md', 'auto', 'pt')
    handleFile.deleteFile('CHANGELOG_pt.md')

    expect(result).toBe(true)
  }, 15000)

  it('should translate CHANGELOG.md file to Portuguese and save as CHANGELOG.pt.md', async () => {
    const result = await translateFile(
      '../../CHANGELOG.md',
      'auto',
      'pt',
      '../../CHANGELOG.pt.md'
    )
    handleFile.deleteFile('CHANGELOG.pt.md')

    expect(result).toBe(true)
  }, 15000)
})

describe('Test Translate File Error Handling', () => {
  it('should fail when trying to translate a non-existent file', async () => {
    const result = await translateFile('', 'auto', 'pt')
    expect(result).toBe(false)
  }, 15000)

  it('should fail when an invalid output file is passed', async () => {
    const result = await translateFile(
      '../../CHANGELOG.md',
      'auto',
      'pt',
      'ABC/\\0123'
    )
    expect(result).toBe(false)
  }, 15000)
})
