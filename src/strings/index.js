const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = [];
  str = str.split("");
  for (i=0; i<str.length; i+=2) {
    let pair = str[i].concat(str[i+1]);
    arr.push(pair);
  }
  return arr;
}

const reverse = (str) => {
  // write code for strings.reverse
  let arr = str.split("");
  // let rev = []; 
  // for (i=arr.length; i>0; i--){
  //   let temp = arr.pop();
  //   rev.push(temp);
  // }
  arr = arr.reverse();
  arr = arr.join("");
  return arr;

}

module.exports = {
  split,
  pairs,
  reverse
}