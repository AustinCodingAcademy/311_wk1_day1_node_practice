const split = (str, delim) => {
  // write code for strings.split
let splitStr = str.split(delim)
return splitStr
}

const pairs = (str) => {
  // write code for strings.pairs
let pairs = str.match(/(..?)/g)
return pairs
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitStr = str.split("");
  let reverse = splitStr.reverse();
  let finished = reverse.join("");
  return finished;

}

module.exports = {
  split,
  pairs,
  reverse
}