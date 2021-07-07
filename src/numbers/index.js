const isEven = (num) => {
	if (num % 2 === 0) {
		return true;
	}
};

const sum = (arr) => {
	let x = 0;
	// write code for numbers.sum
	for (let i = 0; i < arr.length; i++) {
		x += arr[i];
	}
	return x;
};

const comboSum = (arr, target) => {
	// write code for numbers.comboSum
	// [1, 3, 6, 2, 9], 14]
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			for (let k = j + 2; k < arr.length; k++) {
				if (arr[i] + arr[j] + arr[k] === target) {
					return true;
				} else return false;
			}
		}
	}
};
console.log(comboSum([1, 3, 6, 2, 9], 14));

module.exports = {
	isEven,
	sum,
	comboSum
};
