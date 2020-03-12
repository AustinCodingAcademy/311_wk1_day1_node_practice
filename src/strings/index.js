const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);

}

const pairs = (str) => {
  // write code for strings.pairs

  const arrResult = [];
  for(let i = 0; i < str.length; i += 2) 
    {
      arrResult.push(str.substring(i,i+2))
    }
  return arrResult;
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
