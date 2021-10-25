import foobar from './index'

describe('Foobar', () => {
  it('should return foobar', () => {
    expect(foobar('foo', 'bar')).toBe('foobar')
  })
})
