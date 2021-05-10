const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0){
    return true
  }
}



//For Loop Example from Stack Overflow:
//  var numbers = [10, 20, 30, 40] // sums to 100 **arr
//   var sum = 0; **makeup variable name
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

const sum = (arr) => {
  // write code for numbers.sum
let start = 0;
for (let i = 0; i < arr.length; i++){
  start += arr[i]
}
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  if (arr == sum){
    return true
  } else
  return false
} 

module.exports = {
  isEven,
  sum,
  comboSum
}