function findNaughtyStep(original, modified) {
  const lenOriginal = original.length
  const lenModified = modified.length
  const len = lenOriginal >= lenModified ? lenOriginal : lenModified

  for (let i = 0; i < len; i++) {
    const charOriginal = typeof original[i] !== 'undefined' ? original[i] : ''
    const charModified = typeof modified[i] !== 'undefined' ? modified[i] : ''

    if (charOriginal !== charModified) {
      return lenModified > lenOriginal ? charModified : charOriginal
    }
  }
  return ''
}

module.exports = findNaughtyStep
