const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/.{1,2}/g)
}

const reverse = (str) => {
  // write code for strings.reverse
  var splitString = str.split(""); 
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join(""); 
  return joinArray; 
}

module.exports = {
  split,
  pairs,
  reverse
}