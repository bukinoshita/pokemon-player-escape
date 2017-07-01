'use strict'

module.exports = (myPokemonSpeed, pokemonSpeed, nTimes = 1) => {
  let b = pokemonSpeed / 4

  if (b === 0) {
    b += 1
  }

  const result = myPokemonSpeed * 32 / b + 30 * nTimes

  return result
}
