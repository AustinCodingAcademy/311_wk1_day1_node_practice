const split = (str, delim) => {
  //write code for strings.split 
  return str.split(delim)

}

const pairs = (str) => {
  // write code for strings.pairs
let arrPair = str.match(/.{1,2}/g)
return arrPair
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitStr = str.split("")
  let revStr = splitStr.reverse()
  let reversedStr = revStr.join("")
  return reversedStr
}


module.exports = {
  split,
  pairs,
  reverse
}