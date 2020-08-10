const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
const strPair = []
  for (let i=0; i < str.length; i++) {
    strPair.push(str[i] + str[i+1])
    i++
  }
  return strPair
}

const reverse = (str) => {
  // write code for strings.reverse
  if (str === ""){
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

module.exports = {
  split,
  pairs,
  reverse
}