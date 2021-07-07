const split = (str, delim) => {
  // write code for strings.split
    return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let strArr = Array.from(str)
  let pairs = []
  for (let i = 0; i < strArr.length; i+=2) {
    // console.log(index)
    let element = strArr[i]
    let chunks = [element, strArr[i + 1]]
    let joinedChunks = chunks.join('')
   // console.log(joinedChunks)
    pairs.push(joinedChunks)
  }
  return pairs
}
 

const reverse = (str) => {
  // write code for strings.reverse
    return str.split("").reverse().join("");
}

module.exports = {
  split,
  pairs,
  reverse
}