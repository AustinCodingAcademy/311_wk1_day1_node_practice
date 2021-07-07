const isEven = (num) => {
  // write code for numbers.isEven
 if(num%2===0) {
   return true;
 } else return false;
}

const sum = (arr) => {
  // write code for numbers.sum
  let sum=0;
 for (let i=arr.length-1;i>=0;i--) {
  sum += arr.pop();
 }
 return sum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i=0;i<arr.length;i++){
    for (let x=0;x<arr.length;x++){
      if (arr[i]+arr[x]===sum) return true;
    }
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}