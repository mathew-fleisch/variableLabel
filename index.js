'use strict'

const crc = require('js-crc').crc16

const goal = ['fb38', '8cc2', '55a5', '4f1a', '318a']
const compare = "Agent 3oH ID "

var o = [], n, padded
var thisString = ''
var track = []

// Loop through first 10,000 numbers
for (n = 0; n <= 9999; n++) {
  // Pad numbers with zeros
  padded = ('000'+n).slice(-4)

  // Build string to hash
  thisString = `${compare}${padded}`

  // compare this string to comparison string
  if (compareString(goal, thisString)) {
    // Put all answers in a new array
    track.push(thisString)
    console.log("^ THAT ONE!!! ^")
  }
}

// Now that all of the answers are in the track variable, display them
console.log('All the answers:')
for (var i = 0; i < track.length; i++) {
  console.log(`${track[i]}: ${crc(track[i])}`)
}

// Compare a base string to a comparison string, by first hashing
function compareString(goal, thatString) {
  var transformed = crc(thatString)
  for (var i = 0; i < goal.length; i++) {
    console.log(`${thatString}: ${transformed} ?= ${goal[i]}`)
    if (transformed === goal[i]) return true
  }
  return false
}
