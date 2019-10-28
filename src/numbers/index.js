const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 === 0){
    return true
  }
  }
isEven(4)


const sum = (arr) => {
  // write code for numbers.sum
  const sumOfNumbers = arr.reduce((accumulator, currentValue) => {
return accumulator + currentValue;}, 0);
  return sumOfNumbers;
}
console.log(sum)
  

const comboSum = (arr, sum) => {
  
  for (let i = 0; i<arr.length; i++){
    const diff = sum - arr[i]
    if(arr.indexOf(diff) !== -1){
      return true
    }
  }
      return false

  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}