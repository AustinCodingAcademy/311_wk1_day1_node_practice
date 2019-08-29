`// import moment here; use this package in each function
`;
const moment = require("moment");
const today = () => {
	const moment = require("moment");
	return moment().format("dddd");
};

const calendar = () => {
  return moment().format(DD-MM-YYYY)
};

const currentTime = () => {
	return moment().toString();
};

module.exports = {
	today,
	calendar,
	currentTime
};

// * Complete the following functions in `dates/index.js`:
// * Make sure to import `moment` at the top of the file
// * Refer to the moment.js docs: https://momentjs.com/docs/

// * Today
//   * Return the name of current day. Ex. Monday, Tuesday, etc.
//   * Hint: moment().format(?)

// * Calendar
//   * Return the current date in the format: May 29, 2019
//   * Hint: moment().format(?)

// * CurrentTime
//   * Return the current time in the format: 03:21:51 PM
//   * Hint: moment().format(?)
