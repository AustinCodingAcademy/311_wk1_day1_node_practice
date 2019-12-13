const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 === 0) {
    console.log("Even number is: ", num)
    return true
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
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