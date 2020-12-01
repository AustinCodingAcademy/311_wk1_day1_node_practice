const { strings } = require("..")

const split = (str, delim) => {
  // write code for strings.split
  let stringArray = str.split(delim) //uses the .split method to split the string at the specified index
  return stringArray //returns the result

}

const pairs = (str) => {
  // write code for strings.pairs
  let pairsArray = [] //creates an empty array to push the results to
  for (let i = 0; i < str.length; i+=2) {  //iterates through the string in 2's
    pairsArray.push(str.substring(i, i+2)) //creates a new substring of two characters and pushes them to the new array
  }
 return pairsArray //returns the result

}

const reverse = (str) => {
  // write code for strings.reverse
  let arrayOfChars = str.split('') //spilts the string into an array of individual characters
  let reversedArray = arrayOfChars.reverse() //reverses the array of characters
  let resultString = reversedArray.join("") //converts the array back into a string.
  return resultString //returns the result
}


module.exports = {
  split,
  pairs,
  reverse
}