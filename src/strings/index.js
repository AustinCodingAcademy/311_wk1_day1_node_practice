const split = (str, delim) => {
  // write code for strings.split
return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = [];
  for (let i=0; i<str.length; i+=2) {
    arr.push(str[i] + str[i+1])
  }
  return arr
}


const reverse = (str) => {
  // write code for strings.reverse
var splitString = str.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join(""); 
return joinArray;
}

reverse('hello')

module.exports = {
  split,
  pairs,
  reverse
}