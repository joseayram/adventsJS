const contarOvejas = require('../../src/challenges/2021/01')

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
  { name: 'abc aa  lko', color: 'rojo' },
]

describe('AdventJS 2021 - Reto #1: Contando ovejas para dormir', () => {
  test('Test #01 - return Array', () => {
    expect(Array.isArray(contarOvejas([{ name: 'Euge', color: 'rojo' }]))).toBe(true)
  })

  it('Test #02 - return Count 2 ', () => {
    expect(contarOvejas(ovejas)).toHaveLength(2)
  })
})
