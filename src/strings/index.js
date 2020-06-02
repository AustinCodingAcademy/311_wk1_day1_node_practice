const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let strList = []
  for(let i= 0; i < str.length-1; i++) {
    if(i%2 ===0) {
    strList.push(`${str[i]}${str[i+1]}`)
  }
  }
  return strList
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