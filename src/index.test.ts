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
