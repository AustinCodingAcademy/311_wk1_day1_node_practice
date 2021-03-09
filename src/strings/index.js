const split = (str, delim) => {
  newArr = str.split(delim)
  return newArr
}

const pairs = (str) => {
  // write code for strings.pairs
  const pairsArr = []
    for(let i = 0; i < str.legth-1; i++) {
      if(i%2 === 0) {
      pairsArr.push(`${str[i]}${str[i+1]}`)
      i++
  }
  }
  return pairsArr
}
// console.log[pairsArr]

const reverse = (str) => {

  return str.split("").reverse().join("")
  //returns the result

}

module.exports = {
  split,
  pairs,
  reverse
}