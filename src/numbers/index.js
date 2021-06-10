const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
return true;
  }
  
}

const sum = (arr) => {
  // write code for numbers.sum
  let arrayReddy = arr.reduce((a, b) => a + b, 0)
  return arrayReddy

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
for (let i = 0; i <arr.length -1; i++) {
  for (let j = 1; j <arr.length-1; j++) {
    if(arr[i]+arr[j] == sum) {
      return true
    } else 
    {return false}
         

  }
}
}

module.exports = {
  isEven,
  sum,
  comboSum
}