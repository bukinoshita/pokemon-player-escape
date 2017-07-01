'use strict'

import test from 'ava'
import m from './'

test(t => {
  const errorProbability = t.throws(() => m.probability())
  const errorEscape = t.throws(() => m.escape())
  t.true(m.escape(126, 69))
  t.true(m.probability(126, 69) > 1)
  t.is(errorProbability.message, 'Pokemon speed must be a number')
  t.is(errorEscape.message, 'Pokemon speed must be a number')
})
