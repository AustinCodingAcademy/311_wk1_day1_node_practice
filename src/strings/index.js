const split = (str, delim) => {
  // write code for strings.split
  return str.split('-')
}

const pairs = (str) => {
    let newStr= str.split('');
    let arr = [];
    // write code for strings.pairs
   for(let i = 0; i<newStr.length; i += 2) {
     arr.push((newStr[i] + newStr[i+1]))
   }
   return arr
  }


const reverse = (str) => {
  // write code for strings.reverse
  let newStr = str.split('')
  let revStr = newStr.reverse()
  return revStr.join('')
}

module.exports = {
  split,
  pairs,
  reverse
}