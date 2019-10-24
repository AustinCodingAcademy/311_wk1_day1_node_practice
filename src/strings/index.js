const split = (str, delim) => {
  // write code for strings.split
  let arrayed = str.split(delim);
  return arrayed;
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairs = [];
  let arrayed = str.split('');

  for (let i = 0; i < arrayed.length; i = i + 2){
    pairs.push(arrayed[i].concat(arrayed[i+1]));
  }
  return pairs;

}

const reverse = (str) => {
  // write code for strings.reverse
  let arr = str.split('');
  let rvrsd = arr.reverse();
  return rvrsd.join('');
}

module.exports = {
  split,
  pairs,
  reverse
}