const findNaughtyStep = require('../../src/challenges/2023/03')

describe('AdventJS 2023 - Challenge #3: The naughty elf', () => {
  it('Test #01 - return Type', () => {
    expect(typeof findNaughtyStep('abc', 'abc')).toBe('string')
  })

  it("Test #02 - Test: findNaughtyStep('abcd', 'abcde')", () => {
    expect(findNaughtyStep('abcd', 'abcde')).toEqual('e')
  })

  it("Test #03 - Test: findNaughtyStep('abcde', 'abcd')", () => {
    expect(findNaughtyStep('abcde', 'abcd')).toEqual('e')
  })

  it("Test #04 - Test: findNaughtyStep('xxxx', 'xxoxx')", () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toEqual('o')
  })

  it("Test #05 - Test: findNaughtyStep('stepfor', 'stepor')", () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toEqual('f')
  })

  it("Test #06 - Test: findNaughtyStep('iiiii', 'iiiii')", () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toEqual('')
  })
})
