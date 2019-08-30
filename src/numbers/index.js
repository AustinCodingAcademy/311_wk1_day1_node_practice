const isEven = (num) => {
  if(num % 2 === 0) {
    console.log("Even number is: ", num)
    return true
  }
}

//Sum
const sum = (arr) => {
  return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}

//comboSum
function sumOf(arr){
  return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}

const comboSum = (arr, num) => {
  let newSum = sumOf(arr)
  if(newSum === num) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}


// * isEven
//   * Return a boolean that represents whether a given number is even
//   * Hint: Modulus

// * Sum
//   * Return a value that represents the sum of an array of numbers
//   * Hint: Reduce

// * ComboSum
//   * Determine if any combination of numbers in an array equals a given sum. Return a boolean
//   * Hint: Loop in loop OR indexOf for diff