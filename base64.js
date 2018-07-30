'use strict'
/**
 * Valid URL: file=/www/new-agents/roster.txt
 * &sig=BE3663BE6AF17EF57B2671E7C73069076151A5F72923E85CC5E34CD68A443E2D
 * Desired file: /www/private/.htpasswd
 * Response format: b64-encoded-query-string<space>b64-encoded-signature
 * 30 Jul 2018 04:21:35 GMT « daemon -> player »
 */

const base64 = require('base-64')
const sha256 = require('sha256')

// Comparison string
const compare = 'BE3663BE6AF17EF57B2671E7C73069076151A5F72923E85CC5E34CD68A443E2D'


// Failed attempts
var stringMatches = [
  sha256(base64.encode('file=/www/new-agents/roster.txt')),
  sha256(base64.encode('/www/new-agents/roster.txt')),
  sha256('roster.txt'),
  sha256(base64.encode('roster.txt'))
]

// Example hashes
console.log(`base64: ${base64.encode('this is a test')}`)
console.log(`sha256: ${sha256('this is another test')}`)

// Compare strings
for (var i = 0; i < stringMatches.length; i++) {
  console.log(`Compare: ${compareString(compare, stringMatches[i].toUpperCase())}`)
}


function compareString(compare, thatString) {
  console.log(`${thatString} ?== ${compare}`)
  if (compare === thatString) {
    return 'they are the same!'
  } else {
    return 'no match found'
  }
}