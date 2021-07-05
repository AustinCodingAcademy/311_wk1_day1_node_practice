const split = (str, delim) => {
  let arrayOfStrings = str.split(delim)
  return arrayOfStrings
}

const pairs = (str) => {
  let paired = str.match(/(..?)/g)
  return paired
}

const reverse = (str) => {
    return str.split("").reverse().join("");
}

module.exports = {
  split,
  pairs,
  reverse
}