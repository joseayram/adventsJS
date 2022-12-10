const wrapping = require('../../src/challenges/2022/01')

describe('AdventJS 2022 - Challenge #1: Automating Christmas gift wrapping!', () => {
  test('Test #01 - return Array', () => {
    expect(Array.isArray(wrapping(['cat', 'game', 'socks']))).toBe(true)
  })

  it('Test #02 - wrapping(["cat", "game", "socks"])', () => {
    expect(wrapping(['cat', 'game', 'socks'])).toStrictEqual([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ])
  })

  it('Test #03 - wrapping(["midu", "achalogy"])', () => {
    expect(wrapping(['midu', 'achalogy'])).toStrictEqual([
      '******\n*midu*\n******',
      '**********\n*achalogy*\n**********',
    ])
  })

  it('Test #04 - wrapping(["a"])', () => {
    expect(wrapping(['a'])).toStrictEqual(['***\n*a*\n***'])
  })

  it('Test #05 - Empty Array Should return an Empty Array', () => {
    expect(wrapping([])).toStrictEqual([])
  })
})
