function split(str, delim){

  let strToArr = str.split(delim);

  return strToArr; 
}

function pairs(str){

  let array = []; 

  for(let i = 0; i < str.length; i+=2){
    array.push(str[i].concat(str[i+1])); 
  }

  return array; 
}

function reverse(str){

  let strToArr = str.split(''); 

  let revString = strToArr.reverse(); 

  let newStr = revString.join(''); 

  return newStr; 
}

module.exports = {
  split,
  pairs,
  reverse
}