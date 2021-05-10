const split = (str, delim) => {
  // write code for strings.split
  // str.split(delim)

  let array = str.split("-");
  return array;

}

const pairs = (str) => {
  // write code for strings.pairs
  // for(let i = 0; i < str.length; i+2) // the +2 means it will advance the iterator (i) two units in each iteration- so works for pairs
  //  return str.split("")

  //Stackoverflow for using match to split into pairs (or we can make the n be however many we want)
  //https://stackoverflow.com/questions/18407260/split-a-string-to-groups-of-2-chars-using-split
  
  return str.match(/.{2}/g);
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('') // split the characters/then reverse the order/then join back together
}

module.exports = {
  split,
  pairs,
  reverse
}
