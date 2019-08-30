const split = (str, delim) => {
  console.log("Split Array: ", str.split(delim))
  return str.split(delim)
}

//pairs
const pairs = (str) => {
  let strArr = Array.from(str)
  let pairs = []
  for (let i = 0; i < strArr.length; i+=2) {
    // console.log(index)
    let element = strArr[i]
    let chunks = [element, strArr[i + 1]]
    let joinedChunks = chunks.join('')
    console.log(joinedChunks)
    pairs.push(joinedChunks)
  }
  return pairs
}
// pairs('abcdefghijklmnop')

//reverse
const reverse = (str) => {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  console.log("Reverse: ",joinArray)
  return joinArray;
}

module.exports = {
  split,
  pairs,
  reverse
}

// * Split
//   * Split a string on a given delimiter and return the resulting array
//   * Hint: split

// * Pairs
//   * Break a string into pairs of two characters each. Return the array of pairs
//   * Hint: For loop, increment by 2

// * Reverse
//   * Reverse the characters in a given string
//   * Hint: split, reverse, join