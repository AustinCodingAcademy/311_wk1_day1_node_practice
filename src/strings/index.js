const split = (str, delim) => {
  // write code for strings.split
  // let stringSplit = str.split("anewstring", 3);
  // return stringSplit;
}



const pairs = (str) => {
  // write code for strings.pairs

}

const reverse = (str) => {
  // write code for strings.reverse
  var splitString = str.split("")
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join("")
  return joinArray;
}

module.exports = {
  split,
  pairs,
  reverse
}