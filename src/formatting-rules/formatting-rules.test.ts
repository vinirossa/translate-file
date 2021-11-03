import { formattingRules } from './formatting-rules'

describe('Test Formatting Rules', () => {
  it("should return a string for extensions' default rule", () => {
    const result = formattingRules['default']('example')
    expect(typeof result === 'string').toBe(true)
  })

  describe("Test '.md' Extension Rules", () => {
    it('should return a string for the extension default rule', () => {
      let result = undefined
      if (formattingRules['.md']) {
        result = formattingRules['.md']['default']('example')
      }
      expect(typeof result === 'string').toBe(true)
    })

    it('should return a string for the language en', () => {
      let result = undefined
      if (formattingRules['.md'] && formattingRules['.md']['en']) {
        result = formattingRules['.md']['en']('example')
      }
      expect(typeof result === 'string').toBe(true)
    })

    it('should return a string for the language es', () => {
      let result = undefined
      if (formattingRules['.md'] && formattingRules['.md']['es']) {
        result = formattingRules['.md']['es']('example')
      }
      expect(typeof result === 'string').toBe(true)
    })

    it('should return a string for the language pt', () => {
      let result = undefined
      if (formattingRules['.md'] && formattingRules['.md']['pt']) {
        result = formattingRules['.md']['pt']('example')
      }
      expect(typeof result === 'string').toBe(true)
    })
  })
})
