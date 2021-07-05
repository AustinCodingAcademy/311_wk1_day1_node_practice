const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/..?/g)
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split('');
  let reversedString = splitString.reverse('');
  return reversedString.join('');
}

module.exports = {
  split,
  pairs,
  reverse
}