const split = (str, delim) => {
  // write code for strings.split

  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let returnArray = [];
  for(let i=0;i<str.length;i+=2){
    returnArray.push(str.substring(i,i+2));
  }
  return returnArray;
}

const reverse = (str) => {
  // write code for strings.reverse
    return str.split("").reverse().join("");
  
    
}

module.exports = {
  split,
  pairs,
  reverse
}