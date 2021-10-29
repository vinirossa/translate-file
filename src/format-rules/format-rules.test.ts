import { formatRules } from './format-rules'

describe('Check for Default Rules', () => {
  it('should have the default format rule', () => {
    expect('default' in formatRules).toBe(true)
  })

  it('should have a default format rule for each file extension', () => {
    Object.entries(formatRules).forEach(rule => {
      if (rule[0] != 'default' && Object.keys(rule[1]).length !== 0) {
        expect('default' in rule[1]).toBe(true)
      }
    })
  })
})

describe('Test each Format Rule', () => {
  describe("Test '.md' extension rules", () => {
    it('should return a string for the language en', () => {
      const result = formatRules['.md']['en']('example')
      expect(typeof result === 'string').toBe(true)
    })

    it('should return a string for the language es', () => {
      const result = formatRules['.md']['es']('example')
      expect(typeof result === 'string').toBe(true)
    })

    it('should return a string for the language pt', () => {
      const result = formatRules['.md']['default']('example')
      expect(typeof result === 'string').toBe(true)
    })

    it('should return a string for the extension default rule', () => {
      const result = formatRules['default']('example')
      expect(typeof result === 'string').toBe(true)
    })
  })

  it("should return a string for extensions' default rule", () => {
    const result = formatRules['.md']['pt']('example')
    expect(typeof result === 'string').toBe(true)
  })
})
