function wrapping(gifts) {
  const wrapped = []

  gifts.forEach(function (gift) {
    const len = gift.length + 2
    const value = '\n*' + gift + '*\n'
    const line = '*'.repeat(len)
    const wrap = line + value + line
    wrapped.push(wrap)
  })

  return wrapped
}

module.exports = wrapping
