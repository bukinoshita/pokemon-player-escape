# pokemon-player-escape [![Build Status](https://travis-ci.org/bukinoshita/pokemon-player-escape.svg?branch=master)](https://travis-ci.org/bukinoshita/pokemon-player-escape)

> Check if player escape from battle with wild Pokemon and get probability of escaping


## Install

```
$ npm install --save pokemon-player-escape
```


## Usage
```js
const pokemonPlayerEscape = require('pokemon-player-escape')

pokemonPlayerEscape.escape(25, 100)
// => false

pokemonPlayerEscape.probability(100, 100)
// => 0.6171875 (61%)
```


## API

### pokemonPlayerEscape()

#### .escape(myPokemonSpeed, pokemonSpeed, [nTimes])

Returns a `boolean`. If `true` player's pokemon escape.

##### myPokemonSpeed

Type: `integer`<br/>
Required

Player's Pokemon speed

##### pokemonSpeed

Type: `integer`<br/>
Required

Wild Pokemon speed

##### nTimes

Type: `integer`<br/>
Default: `0`

Number of times player's pokemon tried to escape

#### .probability(myPokemonSpeed, pokemonSpeed, [nTimes])

Returns a `number`.

##### myPokemonSpeed

Type: `integer`<br/>
Required

Player's Pokemon speed


##### pokemonSpeed

Type: `integer`<br/>
Required

Wild Pokemon speed


##### nTimes

Type: `integer`<br/>
Default: `0`

Number of times player's pokemon tried to escape


## Related

- [pokemon-game](https://github.com/bukinoshita/pokemon-game) — Pokemon game — Get 'em all
- [pokemon-escape](https://github.com/bukinoshita/pokemon-escape)
- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Algorithm to catch a pokemon
- [pokedex-api](https://github.com/bukinoshita/pokedex-api) — Pokedex API
- [pokemon-catch-probability](https://github.com/bukinoshita/pokemon-catch-probability) — Check probabilty to catch a pokemon
- [get-pokeball](https://github.com/bukinoshita/get-pokeball) — Get pokeball information
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake) — Algorithm to determine how many times pokeball shakes
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
