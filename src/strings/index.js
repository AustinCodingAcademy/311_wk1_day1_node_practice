const split = (str, delim) => {
  return str.split(delim);

}

const pairs = (str) => {
  return str.match(/.{2}/g);

}

const reverse = (str) => {
  // write code for strings.reverse

}

module.exports = {
  split,
  pairs,
  reverse
}