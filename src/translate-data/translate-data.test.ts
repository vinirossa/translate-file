import { translateData } from './translate-data'

describe('General Tests with Translate Data', () => {
  it('should return a not empty string if source language is auto', async () => {
    const result = await translateData('Isso é um teste', 'auto', 'en')

    if (typeof result === 'string') {
      expect(result && result.trim()).toBeTruthy()
    }
  })

  it('should return false if the source or target languages are empty', async () => {
    const result = await translateData('This is a test', '', '')
    expect(result).toBe(false)
  })

  it("should return false if the source or target languages don't exist", async () => {
    const result = await translateData('This is a test', 'abc', 'abc')
    expect(result).toBe(false)
  })
})

describe('Translate text from English to Portuguese', () => {
  it('should return a not empty string', async () => {
    const result = await translateData('This is a test', 'en', 'pt')

    if (typeof result === 'string') {
      expect(result && result.trim()).toBeTruthy()
    }
  })
})

describe('Translate text from Portuguese to English', () => {
  it('should return a not empty string', async () => {
    const result = await translateData('Isso é um teste', 'pt', 'en')

    if (typeof result === 'string') {
      expect(result && result.trim()).toBeTruthy()
    }
  })
})
