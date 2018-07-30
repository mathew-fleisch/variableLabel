'use strict'
/**
 * Valid URL: file=/www/new-agents/roster.txt
 * &sig=BE3663BE6AF17EF57B2671E7C73069076151A5F72923E85CC5E34CD68A443E2D
 * Desired file: /www/private/.htpasswd
 */

const base64 = require('base-64')
const sha256 = require('sha256')

// Comparison string
const compare = 'BE3663BE6AF17EF57B2671E7C73069076151A5F72923E85CC5E34CD68A443E2D'

const compareFile = '/www/new-agents/roster.txt'
const compareQuery = `file=${compareFile}`
const hr = '-'.repeat(80)

// Failed attempts
var stringMatches = [
  sha256(compareQuery),
  sha256(base64.encode(compareQuery)),
  sha256(compareFile),
  sha256(base64.encode(compareFile))
]

// Example hashes
console.log(`base64.encode('this is a test'): ${base64.encode('this is a test')}`)
console.log(`sha256('this is another test'): ${sha256('this is another test')}`)

console.log(hr)

// Compare strings
for (var i = 0; i < stringMatches.length; i++) {
  console.log(`Compare: ${compareString(compare, stringMatches[i].toUpperCase())}`)
  console.log(hr)
}

console.log(`Sanity Check: ${compareString(compare, compare.toUpperCase())}`)

function compareString(compare, thatString) {
  console.log('Comparing:')
  console.log(thatString)
  console.log(compare)
  if (compare === thatString) {
    return ' ^^^  MATCH FOUND!!!  ^^^ '
  } else {
    return 'no match found'
  }
}
