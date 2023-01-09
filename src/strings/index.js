const split = (str, delim) => {
  // write code for strings.split
  return str.split('-');
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/(..?)/g);
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