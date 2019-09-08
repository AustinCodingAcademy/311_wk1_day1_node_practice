const isEven = num => {
	// write code for numbers.isEven
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

const sum = arr => {
	// write code for numbers.sum
	let total = 0;
	arr.forEach(element => {
		total += element;
	});
	return total;
};

const comboSum = (arr, sum) => {
	// write code for numbers.comboSum
	total = 0;
	arr.forEach(element => {
		total += element;
	});
	return total === sum;
};

module.exports = {
	isEven,
	sum,
	comboSum
};
