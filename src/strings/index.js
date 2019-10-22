const split = (str, delim) => {
  //write code for strings.split 
  return str.split(delim)

}

const pairs = (str) => {
  // write code for strings.pairs

}

const reverse = (str) => {
  // write code for strings.reverse
  let reversedStr = "";    
  for (let i = str.length - 1; i >= 0; i--){        
    reversedStr += str[i];
  }    
  return reversedStr;
}


module.exports = {
  split,
  pairs,
  reverse
}