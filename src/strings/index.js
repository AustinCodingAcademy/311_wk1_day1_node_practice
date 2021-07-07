const split = (str, delim) => {
  // write code for strings.
  return str.split(delim);
}




const pairs = (str) => {
  // write code for strings.pairs
  const results = [];
  for (let i=0; i < str.length; i = i + 2) {    
    if (i+1 < str.length) { // do I have two characters left
      results.push(str.charAt(i) + str.charAt(i + 1));
    } else {
      results.push(str.charAt(i));
    }
  }

  return results;
}

const reverse = (str) => {
  // write code for strings.reverse
  var splitString = str.split("")
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join("")
  return joinArray;
}

module.exports = {
  split,
  pairs,
  reverse
}