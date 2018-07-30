'use strict'

const crc = require('js-crc').crc16

const goal = ['fb38', '8cc2', '55a5', '4f1a', '318a']
const compare = "Agent 3oH ID "

var o = [], n, padded
var thisString = ''
var track = []
for (n = 0; n <= 9999; n++) {
  padded = ('000'+n).slice(-4)
  thisString = `${compare}${padded}`
  if (compareString(goal, thisString)) {
    track.push(thisString)
    console.log("^ THAT ONE!!! ^")
    // break
  }
}
console.log('All the answers:')
for (var i = 0; i < track.length; i++) {
  console.log(`${track[i]}: ${crc(track[i])}`)
}

function compareString(goal, thatString) {
  var transformed = crc(thatString)
  for (var i = 0; i < goal.length; i++) {
    console.log(`${thatString}: ${transformed} ?= ${goal[i]}`)
    if (transformed === goal[i]) return true
  }
  return false
}
