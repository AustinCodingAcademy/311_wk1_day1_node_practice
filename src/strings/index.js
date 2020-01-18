var moment = require('moment');

const split = (str, delim) => {
  return str.split(delim);

}

const pairs = (str) => {
  let newStr = str.split('');
  let pairArr = [];
  for(i = 0; i < str.length; i += 2) {
    pairArr.push(newStr[i] + newStr[i+1])
  }
  return pairArr;

}

const reverse = (str) => {
  return str.split('').reverse().join('');

}

module.exports = {
  split,
  pairs,
  reverse
}