const split = (str, delim) => {
  return str.split(delim);

}

const pairs = (str,) => {
  let pairArray = str.match(/.{1,2}/g)
  return pairArray
}
const reverse = (str) => {
    let splitString = str.split(""); 
    let reverseArray= splitString.reverse();
    let joinArray = reverseArray.join("");
      return joinArray;
}
 
module.exports = {
  split,
  pairs,
  reverse
}