const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = str.split('')
  let groups = [];

  for(let i = 0; i < arr.length; i+=2) {
    groups.push(arr.slice(i, i + 2).join(''))
  }
  return groups
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}