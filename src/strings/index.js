const split = (str, delim) => {
  // write code for strings.split
return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
const newArr = []
for(let i=0; i<str.length; i+=2) {
  console.log(i)
  newArr.push(str[i] + str[i+1])
}
  return newArr
}

// write code for strings.reverse
const reverse = (str) => str.split('').reverse().join('')

module.exports = {
  split,
  pairs,
  reverse
}