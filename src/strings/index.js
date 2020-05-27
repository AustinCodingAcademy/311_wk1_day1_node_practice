const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let arrToReturn = [];

  for (let i = 0; i < str.length; i+=2){
    let pair = str.slice(i, i+2);
    arrToReturn.push(pair);
  }

  return arrToReturn
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split("").reverse().join("")
}

module.exports = {
  split,
  pairs,
  reverse
}