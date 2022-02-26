const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
		return true;
	}
}

const sum = (arr) => {
  // write code for numbers.sum
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
		s += arr[i];
	}
	return s;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let t = arr.reduce(reducer);
  if(t == sum){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}