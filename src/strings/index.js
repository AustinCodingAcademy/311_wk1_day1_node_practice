const split = (str, delim) => {
  // write code for strings.split
  let newString = str.split(delim);
  return newString;

}

const pairs = (str) => {
  // write code for strings.pairs
  let newString2 = '';
  let tempString = '';
  for (i = 0; i < str.length; i+=2){
    tempString = str.slice(i,i+1);
    newString2.push(tempString);
    
  }
  return str, newString2

}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split('');
  let arr = splitString.reverse();
  let newString3 = arr.join('');
  return newString3;

}

module.exports = {
  split,
  pairs,
  reverse
}