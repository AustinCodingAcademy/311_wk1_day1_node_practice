// import moment here; use this package in each function
const moment = require("moment");

const today = () => {
  // write code for dates.today
  return moment().format("dddd");
};

const calendar = () => {
  // write code for dates.calendar
  return moment().format("MMM DD, YYYY");
};

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format("hh:mm:ss A");
  //format() on moment.js is ('h:mm:ss a'), 
  // it does not pass in here, has to change 'a' to 'A'
};

module.exports = {
  today,
  calendar,
  currentTime,
};
