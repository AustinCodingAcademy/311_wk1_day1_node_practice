const split = (str, delim) => {
  return str.split(delim)

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
  return str.split("").reverse().join("")

}

module.exports = {
  split,
  pairs,
  reverse
}