const findFirstRepeated = require('../../src/challenges/2023/01')

const giftIds = [2, 1, 3, 5, 3, 2]

describe('AdventJS 2023 - Challenge #1: First gift repeated!', () => {
  it('Test #01 - return Type', () => {
    expect(typeof findFirstRepeated(giftIds)).toBe('number')
  })

  it('Test #02 - Test: findFirstRepeated([2, 1, 3, 5, 3, 2])', () => {
    expect(findFirstRepeated(giftIds)).toEqual(3)
  })

  it('Test #03 - Test: findFirstRepeated([2, 2])', () => {
    expect(findFirstRepeated([2, 2])).toEqual(2)
  })

  it('Test #04 - Test: findFirstRepeated([2, 4, 3, 5, 1])', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toEqual(-1)
  })

  it('Test #05 - Test: findFirstRepeated([1])', () => {
    expect(findFirstRepeated([1])).toEqual(-1)
  })

  it('Test #06 - Test: findFirstRepeated([])', () => {
    expect(findFirstRepeated([])).toEqual(-1)
  })

  it('Test #07 - Test: findFirstRepeated([10, 20, 30])', () => {
    expect(findFirstRepeated([10, 20, 30])).toEqual(-1)
  })

  it('Test #08 - Test: findFirstRepeated([5, 1, 2, 3, 2, 5, 1])', () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toEqual(2)
  })

  it('Test #09 - Test: findFirstRepeated([12, 20, 30, 11, 20, 12])', () => {
    expect(findFirstRepeated([12, 20, 30, 11, 20, 12])).toEqual(20)
  })

  it('Test #10 - Test: findFirstRepeated([1, 2, 3, 5, 5, 3, 2, 1])', () => {
    expect(findFirstRepeated([1, 2, 3, 5, 5, 3, 2, 1])).toEqual(5)
  })
})
