const isEven = (num) => {
  // write code for numbers.isEven
 if(num % 2 === 0) {
   return true
 }
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue
  );
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
return arr.reduce((accumulator, currentValue) => accumulator +currentValue) === sum
} 

module.exports = {
  isEven,
  sum,
  comboSum
}