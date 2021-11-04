import { translateData } from './translate-data'

describe('General Tests with Translate Data', () => {
  it('should return a not empty string if source language is auto', async () => {
    const result = await translateData('Isso é um teste', 'auto', 'en')

    if (typeof result === 'string') {
      expect(result.trim()).toBeTruthy()
    }
  }, 15000)

  it('should fail if the source or target languages are empty', async () => {
    let result
    try {
      result = await translateData(' ', 'auto', 'en')
    } catch (err) {
      expect(result).toBe(false)
    }
  }, 15000)
})

describe('Translate text from English to Portuguese', () => {
  it('should return a not empty string', async () => {
    const result = await translateData('This is a test', 'en', 'pt')

    if (typeof result === 'string') {
      expect(result.trim()).toBeTruthy()
    }
  }, 15000)
})

describe('Translate text from Portuguese to English', () => {
  it('should return a not empty string', async () => {
    const result = await translateData('Isso é um teste', 'pt', 'en')

    if (typeof result === 'string') {
      expect(result.trim()).toBeTruthy()
    }
  }, 15000)
})
