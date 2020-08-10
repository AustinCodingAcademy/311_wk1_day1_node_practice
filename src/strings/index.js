const split = (str, delim) => {
  result = str.split(delim)
  return result
}

const pairs = (str) => {
  let newArray = []
  for (let i = 0; i < str.length; i+=2) {
    temp = (str[i] + str[i+1])
    newArray.push(temp.split("").join(""))
  }
  return newArray
}

const reverse = (str) => {
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}