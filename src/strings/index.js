const split = (str, delim) => {
  newArr = str.split(delim)
  return newArr
}

const pairs = (str) => {
  let arr = []
  for (let i = 0; i < str.length; i+=2) {
    arr.push(str.substring(i, i+2))
  }
  return arr
  }

const reverse = (str) => {
  let arr = str.split('')
  let reversedArr = arr.reverse()
  let finalStr = reversedArr.join("")
  return finalStr
}

module.exports = {
  split,
  pairs,
  reverse
}