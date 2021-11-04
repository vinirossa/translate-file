import { exec } from 'child_process'

describe('Test CLI interface for Translate File', () => {
  it('should return project version (--version)', async () => {
    await exec('yarn start -V', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  it('should return project version (-V)', async () => {
    await exec('yarn start -v', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  it('should return a help log about the project (--help)', async () => {
    await exec('yarn start --help', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  it('should return a help log about the project (-h)', async () => {
    await exec('yarn start -h', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  it('should return the list of supported languages (--languages)', async () => {
    await exec('yarn start --languages', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  it('should return the list of supported languages (-l)', async () => {
    await exec('yarn start -l', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  it('should return the list of handled extensions (--extensions)', async () => {
    await exec('yarn start --extensions', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  it('should return the list of handled extensions (-e)', async () => {
    await exec('yarn start -e', (error, stdout, stderr) => {
      expect(error === null && stderr.trim() && !stdout.trim()).toBe(true)
    })
  })

  // it('should return a help log about the project (-h)', async (done): Promise<
  //   void | undefined
  // > => {
  //   await exec('yarn start -h', (error, stdout, stderr) => {
  //     expect(
  //       error === null &&
  //         (!stderr || !stderr.trim()) &&
  //         !!(stdout && stdout.trim())
  //     ).toBe(true)
  //   })
  //   done()
  // })
})
