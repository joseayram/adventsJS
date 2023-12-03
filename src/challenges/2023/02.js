function manufacture(gifts, materials) {
  const materialsArray = materials.split('')
  const giftsFilters = gifts.filter((gift) => {
    let count = 0

    for (const char of gift) {
      if (materialsArray.includes(char)) {
        count++
      }
    }

    return count === gift.length
  })
  return giftsFilters
}

module.exports = manufacture
