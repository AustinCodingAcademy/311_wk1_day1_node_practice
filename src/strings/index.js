const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  
  let pairsarr = [];
  let newarr = [];
  for (let i = 0; i<str.length; i += 2) {
    pairsarr.push(str[i]);
    pairsarr.push(str[i+1]);
    newarr.push(pairsarr.join(''));
    pairsarr = [];
  }
  return(newarr);
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('');
}

module.exports = {
  split,
  pairs,
  reverse
}