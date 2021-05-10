const split = (str, delim) => {
  // write code for strings.split
  str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  for(let i = 0; i < str.length; i+2) // the +2 means it will advance the iterator (i) two units in each iteration- so works for pairs
   return str.split("")
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('') // split the characters/then reverse the order/then join back together
}

module.exports = {
  split,
  pairs,
  reverse
}
