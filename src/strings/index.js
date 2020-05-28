const split = (str, delim) => {
  // write code for strings.split
  let splits = str.split(`${delim}`)
  return splits 
}

const pairs = (str) => {
  // write code for strings.pairs
  let newList = []
  for(let i= 0; i < str.length-1; i++) {
    if(i%2 ===0) {
    newList.push(`${str[i]}${str[i+1]}`)
  }
  }
  return newList
}

const reverse = (str) => {
  // write code for strings.reverse
  let backwards = []
  let maxIndex = str.length
  // console.log(maxIndex)
  for(let i=maxIndex; i < str.length+1; i--) {
    //we want to count down
    console.log(i)
    if(i < -1) {
      return backwards.join('').trim()
    } else {
      backwards.push(str[i])
    }
  }
  //still training
}

module.exports = {
  split,
  pairs,
  reverse
}