const split = (str, delim) => {
  // write code for strings.split
return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
let newArray = []
  for (let i = 0; i < str.length; i+=2) {
    temp = (str[i] + str[i+1])
    newArray.push(temp.split("").join(""))
  }
  // newArray.push(str.split("").join(" , "))
  return newArray
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