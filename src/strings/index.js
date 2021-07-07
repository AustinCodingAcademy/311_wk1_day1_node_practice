const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)

}

const pairs = (str) => {
  // write code for strings.pairs
  let solution = [];
  for ( let i = 0; i <str.length; i +=2){
    let pair = str.slice(i, i+2)
    solution.push(pair)
   
  }
  console.log(solution)
  return solution;

}
// pairs('abcdefghijklmno')
const reverse = (str) => {
  // write code for strings.reverse
  console.log(str.split("").reverse().join(""))
  return str.split("").reverse().join("")

}
reverse("string")
module.exports = {
  split,
  pairs,
  reverse
}