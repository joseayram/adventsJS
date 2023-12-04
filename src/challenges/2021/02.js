function listGifts(letter) {
  const palabras = letter.split(' ')
  const regalos = {}
  palabras.map(function (palabra) {
    if (!palabra.includes('_') && palabra.trim() !== '') {
      regalos[palabra] = (regalos[palabra] || 0) + 1
    }
  })

  return regalos
}

module.exports = listGifts
