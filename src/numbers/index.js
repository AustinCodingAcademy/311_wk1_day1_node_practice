const isEven = (num) => {
  if(num % 2 === 0){
    return true
  }
  else{ return false}
}

const sum = arr => arr.reduce((acc, cur) => acc + cur)
//   var total = 0
//   arr.forEach(num => {
//     total += num
//   });
// return total
// console.log(array1.reduce(reducer));




const comboSum = (arr, sum) => {
  let match = false
  for (let i = 0; i<arr.length; i++){
  for (let j = i + 1; j<arr.length; j++){
  if (arr[i]+arr[j] === sum){
  match = true
  }
  }
  }
  return match

 
}

module.exports = {
  isEven,
  sum,
  comboSum
}