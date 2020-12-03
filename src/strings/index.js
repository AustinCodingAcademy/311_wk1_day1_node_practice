const split = (str, delim) => {
  // write code for strings.split
  let arr = []
  let numDelim = 0
  let indexDelim = str.indexOf(delim)
  let start = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == delim) {
      numDelim = numDelim + 1
    }
  }

  for (let i = numDelim; i >= 0; i--) {
    if (i != 0) {
      arr.push(str.slice(start, indexDelim))
      start = indexDelim + 1
      indexDelim = str.indexOf(delim, indexDelim + 1)
    } else {
      arr.push(str.slice(start))
    }
  }
  
  return arr
}

const pairs = (str) => {
  // write code for strings.pairs
  let pair = []

  for (let i = 0; i < str.length; i = i + 2) {
    pair.push(str.slice(i, i + 2))
  }

  return pair
}

const reverse = (str) => {
  // write code for strings.reverse
  let newStr = ''
  for (let i = str.length - 1; i >=0; i--) {
    newStr = newStr + str[i]
  }
  return newStr
}

module.exports = {
  split,
  pairs,
  reverse
}