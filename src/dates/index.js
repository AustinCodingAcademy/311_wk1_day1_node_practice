// import moment here; use this package in each function
const moment = require("moment");

const today = () => {
	// write code for dates.today
	const day = moment().format("dddd");
	return day;
};

const calendar = () => {
	// write code for dates.calendar
	// Return today\'s date in the format: May 29, 2019'
	const current = moment().format("MMM DD, YYYY");
	return current;
};

const currentTime = () => {
	// write code for dates.currentTime
	// Return the current time in the format: 03:21:51 PM'
	const time = moment().format("HH:mm:ss A");
	return time;
};

module.exports = {
	today,
	calendar,
	currentTime
};
