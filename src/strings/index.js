const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/.{2}/g);
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('');
}

module.exports = {
  split,
  pairs,
  reverse
}
