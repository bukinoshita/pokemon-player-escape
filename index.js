'use strict'

const core = require('./lib/core')
const randomNumber = require('./lib/random-number')

exports.escape = (myPokemonSpeed, pokemonSpeed, nTimes) => {
  if (typeof myPokemonSpeed !== 'number' || typeof pokemonSpeed !== 'number') {
    throw new TypeError('Pokemon speed must be a number')
  }

  const result = core(myPokemonSpeed, pokemonSpeed, nTimes)

  if (result > 255) {
    return true
  }

  if (randomNumber(0, 255) < result) {
    return true
  }

  return false
}

exports.probability = (myPokemonSpeed, pokemonSpeed, nTimes) => {
  if (typeof myPokemonSpeed !== 'number' || typeof pokemonSpeed !== 'number') {
    throw new TypeError('Pokemon speed must be a number')
  }

  const result = core(myPokemonSpeed, pokemonSpeed, nTimes)

  return result / 256
}
