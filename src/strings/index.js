const split = (str, delim) => {
  // write code for strings.split
  console.log("Split Array: ", str.split(delim))
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
let strArr = Array.from(str)
let pairs = []
for (let i = 0; i < str.Arr.length; i+=2) {
 let element = strArr[i]
 let chunks = [element, strArr[i + 1]]
 let joinedChunks = chunks.join('')
 console.log(joinedChunks)
 pairs.push(joinedChunks)
}
return pairs 
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  console.log("Reverse: ", joinArray)
  return joinArray;
}

module.exports = {
  split,
  pairs,
  reverse
}