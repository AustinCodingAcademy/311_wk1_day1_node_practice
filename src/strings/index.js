const split = (str, delim) => {
  return str.split(delim)

}

const pairs = (str) => {
var test = str.match(/(..?)/g)
return test

}

const reverse = (str) => {
  return str.split("").reverse().join("");
}

module.exports = {
  split,
  pairs,
  reverse
}