const split = (str, delim) => {
  return str.split(delim)

}

const pairs = (str) => {
  let arr = []
  console.log(str.split(''))
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2))
  }
  return arr;
}

const reverse = (str) => {
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}