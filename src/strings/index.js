const split = (str, delim) => {
  // write code for strings.split
    return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
    for (var i = 0, pairs = str.length; i < pairs; i += 2) {
      return str.push(pairs.slice(i, i + 2 ).join(""));
    }
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