const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 == 0){
  return true
}
}

const sum = (arr) => {
  // write code for numbers.sum
  let theSum = arr.reduce((a, b) => a + b, 0)
return theSum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let arrSum = arr.reduce((a, b) => a + b, 0)
  if (arrSum != sum ){
    return false
  
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}