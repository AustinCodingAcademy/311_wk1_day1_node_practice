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

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let newNum = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      if (i !== j) {
        newNum = arr[i]+arr[j]
      }
      if (newNum === sum) {
        return true
      } else return false
    }
  }
}




module.exports = {
  isEven,
  sum,
  comboSum
}