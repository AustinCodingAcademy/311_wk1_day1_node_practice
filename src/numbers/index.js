const isEven = num => {
	return num % 2 == 0;
};

const sum = arr => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
};

const comboSum = (arr, sum) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] + arr[j] === sum) {
				return true;
			}
		}
	}
	return false;
};

module.exports = {
	isEven,
	sum,
	comboSum
};
