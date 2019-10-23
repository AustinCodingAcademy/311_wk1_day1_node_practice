const isEven = (num) => {
  // write code for numbers.isEven
	if (num % 2 === 0)
		return true;
	else
		return false;
}

const sum = (arr) => {
  // write code for numbers.sum
let theSum = (acc, curr) => acc + curr

return arr.reduce(theSum) 
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
let match = false
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++ ) {
    if (arr[i] + arr[j] === sum) {
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