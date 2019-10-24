const split = (str, delim) => {
 
  return str.split(delim);
}

const pairs = (str) => {
 
  let empArr = []
  for (let i = 0; i < str.length; i += 2) {
    empArr.push(str.slice(i, i + 2))
  }
  return empArr;

}
const reverse = (str) => {
 
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}
