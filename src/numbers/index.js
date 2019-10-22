const isEven = (num) => {
  // write code for numbers.isEven
	if (num % 2 === 0)
		return true;
	else
		return false;
}

const sum = (arr) => {
  // write code for numbers.sum
  let arr = [1,2,3];
  let sum = arr.reduce(function(a, b) { 
    return a + b; 
  }, 0);
  return sum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}