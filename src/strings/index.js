const split = (str, delim) => {
  // write code for strings.split
return str.split(" ", delim)
}
console.log(split("how are you doing?", 3))

const pairs = (str) => {
  // write code for strings.pairs
  let pair = [];
for(let i = 0; i < str.length; i+=2){
  pair.push(str[i]+ str[i+1])
  }
  console.log(pair)
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