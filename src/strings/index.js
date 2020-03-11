const split = (str, delim) => {
	const specSplit = str.split("-");
	return specSplit;
};

const pairs = (str) => {
	// ['ab', 'cd', 'ef', 'gh', 'ij', 'kl', 'mn', 'op']
	// write code for strings.pairs
	// honestly I don't have a clue how I did this
	const split = str.match(/.{1,2}/g);
	return split;
};

const reverse = (str) => {
	// write code for strings.reverse
	const reVerse = str
		.split("")
		.reverse()
		.join("");
	return reVerse;
};

module.exports = {
	split,
	pairs,
	reverse
};
