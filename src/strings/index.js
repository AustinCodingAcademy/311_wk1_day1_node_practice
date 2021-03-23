const src = require("..")

const split = (str) => {
  // write code for strings.split
return str.split("-")
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/(..?)/g)

}

const reverse = (str) => {
  let splitString = str.split("")
  let reverse = splitString.reverse()
  let rejoin = reverse.join("")
  return rejoin
  // write code for strings.reverse

}

module.exports = {
  split,
  pairs,
  reverse
}