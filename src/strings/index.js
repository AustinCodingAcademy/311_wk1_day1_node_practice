const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let myArray = [];

  for (let i = 0; i < str.length; i += 2) {
    let strPair = str.slice(i, i + 2);
    myArray.push(strPair);
  }
  return myArray;

}


const reverse = (str) => {
  // write code for strings.reverse
  let stringToArray = str.split('');
  let reverseArray = stringToArray.reverse();
  let reverseString = reverseArray.join('');

  return reverseString;
}

module.exports = {
  split,
  pairs,
  reverse
}