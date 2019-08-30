`// import moment here; use this package in each function
`;
const moment = require("moment");

//today
const today = () => {
  const day = moment().format("dddd");
  console.log("Today is: ",day);
  return day;
};

//calendar
const calendar = () => {
  const date = moment().format("LL");
  console.log("Today's date is:", date);
  return date;
};

//currentTime
const currentTime = () => {
  const time = moment().format('hLTS')
  console.log("The current time is: ", time)
  return time
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
