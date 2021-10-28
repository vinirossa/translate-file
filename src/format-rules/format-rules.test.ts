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

// describe('Test each Format Rule', () => {
//   it('should ', () => {})
// })
