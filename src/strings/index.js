const split = (str, delim) => {
  // write code for strings.split
  let res = str.split(delim );
  return res
}

const pairs = (str) => {
  // write code for strings.pairs
  let chunks = [];

  for (let i = 0, charsLength = str.length; i < charsLength; i += 2) {
      chunks.push(str.substring(i, i + 2));
  } return chunks
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