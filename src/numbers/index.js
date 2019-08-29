const isEven = (num) => {
  return num % 2 === 0;

}

const sum = (arr) => {
  const sum = numbers.sum([1, 2, 3, 4, 5, 6]) 
  expect(sum).toEqual([21])

}

const comboSum = (arr, sum) => {
 

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