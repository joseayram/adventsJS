const manufacture = require('../../src/challenges/2023/02')

describe('AdventJS 2023 - Challenge #2: We start the factory', () => {
  it('Test #01 - return Type', () => {
    expect(Array.isArray(manufacture(['libro', 'ps5'], 'psli'))).toBe(true)
  })

  it("Test #02 - Test: manufacture(['tren', 'oso', 'pelota'], 'tronesa')", () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(['tren', 'oso'])
  })

  it("Test #03 - Test: manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')", () => {
    expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toEqual([])
  })

  it("Test #04 - Test: manufacture(['patineta', 'robot', 'libro'], 'nopor')", () => {
    expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toEqual([])
  })

  it("Test #05 - Test: manufacture([], 'letras')", () => {
    expect(manufacture([], 'letras')).toEqual([])
  })

  it("Test #06 - Test: manufacture(['juego', 'puzzle'], 'jlepuz')", () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle'])
  })

  it("Test #07 - Test: manufacture(['libro', 'ps5'], 'psli')", () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([])
  })
})
