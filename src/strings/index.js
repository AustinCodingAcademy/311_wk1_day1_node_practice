const split = (str, delim) => {
	// write code for strings.split
	let test = str.split(delim);
	return test;
};

const pairs = str => {
	// write code for strings.pairs
	let test = str.match(/(..?)/g);
	return test;
};

const reverse = str => {
	// write code for strings.reverse
	let test = str
		.split("")
		.reverse()
		.join("");
	return test;
};

module.exports = {
	split,
	pairs,
	reverse
};
