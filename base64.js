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
const goal = '/www/private/.htpasswd'
const hr = '-'.repeat(80)

// Failed attempts
var stringMatches = {
  'sha256(compareQuery)': sha256(compareQuery).toUpperCase(),
  'sha256(base64.encode(compareQuery))': sha256(base64.encode(compareQuery)).toUpperCase(),
  'sha256(compareFile)': sha256(compareFile).toUpperCase(),
  'sha256(base64.encode(compareFile))': sha256(base64.encode(compareFile)).toUpperCase()
}

// Example hashes
console.log(`base64.encode('this is a test'): ${base64.encode('this is a test')}`)
console.log(`sha256('this is another test'): ${sha256('this is another test')}`)

console.log(hr)

// Setup
console.log(`compareFile: ${compareFile}`)
console.log(`compareQuery: ${compareQuery}`)

console.log(hr)

// Display possible matches
console.log(JSON.stringify(stringMatches, null, 2))

console.log(hr)

// Show how the function works by itself
console.log("Try comparing one string (don't forget to toUpperCase() the sha256 strings):")
console.log(compareString(compare, sha256("This probably won't work").toUpperCase()))

console.log(hr)

// Compare strings
for (var thisComparison in stringMatches) {
  console.log(`Compare [${thisComparison}]: ${compareString(compare, stringMatches[thisComparison].toUpperCase())}`)
  console.log(hr)
}

console.log(`Sanity Check: ${compareString(compare, compare)}`)

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
