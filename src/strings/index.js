const split = (str, delim) => {
  // write code for strings.split
  delim = "-"
  let wordArray = str.split(delim)
  return wordArray
}

const pairs = (str) => {
  // write code for strings.pairs
  // let pair = str.substr(0,2)
  // return pair
  let pairArray = []
  let strArray = str.split('')
  for(let i =0; i< 8; i++){
    let pair = strArray.splice(str[i],2)
    joinedPair = pair.join('')
    pairArray.push(joinedPair)
  }
   return pairArray

}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("")
  let reversedArray = splitString.reverse()
  let joined = reversedArray.join("")
  return joined
}

module.exports = {
  split,
  pairs,
  reverse
}