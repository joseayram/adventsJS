const listGifts = require('../../src/challenges/2021/02')

describe('AdventJS 2021 - Reto #2: Ayuda al elfo a listar los regalos', () => {
  it('Test #01 - return Array', () => {
    expect(typeof listGifts('')).toBe('object')
  })

  it("Test #02 - Test: listGifts('bici coche balón _playstation bici coche peluche')", () => {
    expect(listGifts('bici coche balón _playstation bici coche peluche')).toEqual({
      balón: 1,
      bici: 2,
      coche: 2,
      peluche: 1,
    })
  })

  it("Test #03 - Test: listGifts('patines pelota _tablet monopolio patines')", () => {
    expect(listGifts('patines pelota _tablet monopolio patines')).toEqual({ patines: 2, pelota: 1, monopolio: 1 })
  })
})
