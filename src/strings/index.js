const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let strLength = str.length;
  let pairsArr = [];
  for (let i=0; i<strLength; i=i+2) {
    let newElem = str[i] + str[i+1];
    pairsArr.push(newElem);
  }
  return pairsArr;
}

const reverse = (str) => {
  // write code for strings.reverse
  let strArray = str.split('');
  strArray.reverse();
  return strArray.join('');
}

module.exports = {
  split,
  pairs,
  reverse
}