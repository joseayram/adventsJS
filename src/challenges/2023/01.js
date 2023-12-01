function findFirstRepeated(gifts) {
  const repeated = gifts.filter((item, index) => {
    return gifts.indexOf(item) !== index
  })

  return typeof repeated[0] !== 'undefined' ? repeated[0] : -1
}

module.exports = findFirstRepeated
