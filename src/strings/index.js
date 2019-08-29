const split = (str, delim) => {
	// write code for strings.split
	let curWord = '';
	let newArr = [];

	for ( i = 0; i < str.length; i++ ) {

		let letter = str[i];

		if ( letter === delim ) {
			newArr.push( curWord );
			curWord = '';
		} else if ( i + 1 === str.length ) {
			curWord += letter;
			newArr.push( curWord );
		} else {
			curWord += letter;
		}
	};

	return newArr
}

const pairs = (str) => {
	// write code for strings.pairs
	let pair = '';
	let newArr = [];

	for ( i = 0; i < str.length; i++ ) {

		let letter = str[i];

		if ( i % 2 === 0 ) {
			pair += letter
		} else {
			pair += letter
			newArr.push( pair );
			pair = '';
		}
	};

	return newArr
}

const reverse = (str) => {
	// write code for strings.reverse
	let reversed = '';

	for ( i = 0; i < str.length; i++ ) {
		let letter = str[i];
		reversed = letter + reversed;
	};
	
	return reversed
}

module.exports = {
	split,
	pairs,
	reverse
}