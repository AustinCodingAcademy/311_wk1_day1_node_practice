const split = (str, delim) => {
  // write code for strings.split
  let sum=[];
    sum=str.split(delim);
     return sum;


 }

const pairs = (str) => {
  // write code for strings.pairs
   let pairs=[];
    pairs=str.match(/..?/g);
    return pairs;

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