const isEven = (num) => {
  // write code for numbers.isEven
  return num%2 === 0;
}

const sum = (arr) => {
  // write code for numbers.sum
  let total = 0;

	arr.forEach( num => {
		total += num
	});

	return total
}
	





const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
    let verify = false;
    let Last = 0;
  
    arr.forEach( num => {
      
      if ( Last + num === sum ) {
        verify = true;
      }
  
      Last = sum;
    });
  
    return verify
  }
  


module.exports = {
  isEven,
  sum,
  comboSum
}