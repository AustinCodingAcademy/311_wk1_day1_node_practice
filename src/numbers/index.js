const isEven = (num) => {
    if (num % 2 === 0 || num === 0 )
      return true;
}

const sum = (arr) => arr.reduce((a,b) => a + b, 0)
  // write code for numbers.sum


const comboSum = (arr, sum) => {
  for(let index = 0; index<arr.length; index++){
    for(let index2 = 0; index2<arr.length; index2++){
      if(arr[index] + arr[index2 == sum]){
        return true
      } else {
        return false
      }
    }
  }
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}