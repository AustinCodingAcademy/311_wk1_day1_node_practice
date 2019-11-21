const isEven = (num) => {
if(num % 2 == 0){
  return true
}
}

const sum = (arr) => {
  // write code for numbers.sum
if(!Array.isArray(arr)) return;
  let totalNumber = 0;
  for (let i=0,l=arr.length; i<l; i++) {
     totalNumber+=arr[i];
  }
  return totalNumber;
}

let test = [1, 2, 3, 8, 21]
const comboSum = (arr, sum) => {
    // write code for numbers.comboSum
for (let i=0; i<arr.length; i++) {
  for (let j=0; j<arr.length; j++) {
    } return false
  }
}
console.log(comboSum(test, 10))




module.exports = {
  isEven,
  sum,
  comboSum
}