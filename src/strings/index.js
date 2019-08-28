const split = (str, delim) => {
  return str.split(delim)
}

const pairs = (str) => {
  return str.match(/(..?)/g)
}

const reverse = (str) => {
  let splitString = str.split('')
  let reverseString = splitString.reverse()
  return reverseString.join('');
}

module.exports = {
  split,
  pairs,
  reverse
}