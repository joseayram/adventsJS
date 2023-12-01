function contarOvejas(ovejas) {
  const ovejasFiltradas = ovejas.filter(({ name, color }) => {
    const nombre = name.toLowerCase()
    const contieneNyA = nombre.includes('n') && nombre.includes('a')
    const esRojo = 'rojo' === color
    return contieneNyA && esRojo
  })

  return ovejasFiltradas
}

module.exports = contarOvejas
