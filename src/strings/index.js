const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairArray = str.match(/.{1,2}/g)
  return pairArray
}

const reverse = (str) => {
  // write code for strings.reverse
 let splited = str.split('')
 let reversed = splited.reverse()
 let reverseString = reversed.join('')
 return reverseString

}

module.exports = {
  split,
  pairs,
  reverse
}