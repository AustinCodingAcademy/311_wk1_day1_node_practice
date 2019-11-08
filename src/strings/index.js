const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
};

const pairs = str => {
  // write code for strings.pairs

  var pairs = [];

  for (var i = 0, charsLength = str.length; i < charsLength; i += 2) {
    pairs.push(str.substring(i, i + 2));
  }

  return pairs;
};

const reverse = str => {
  // write code for strings.reverse
  return str
    .split("")
    .reverse()
    .join("");
};

module.exports = {
  split,
  pairs,
  reverse
};
