const split = (str, delim) => {
  let word = str.split(delim)
  return word
}

const pairs = (str) => {
  let strArr = str.split('')
  let newArr = []
  for (let i = 0; i = strArr.length; i++) {
    let twos = strArr.splice(0, 2).join('');
    newArr.push(twos);
  }
  return newArr;
}

const reverse = (str) => {
  let words = str.split('').reverse().join('');
  return words;
}

module.exports = {
  split,
  pairs,
  reverse
}