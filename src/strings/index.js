const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let arrChars = [];
  for (let i = 0; i < str.length - 1; i += 2) {
    arrChars.push(str.slice(i, i + 2));
  }
  if (str.length % 2 === 1)
    arrChars.push(str.slice(str.length - 1));
  return arrChars;
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