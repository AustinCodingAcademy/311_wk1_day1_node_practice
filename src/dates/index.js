// import moment here; use this package in each function
var moment = require('moment');
moment().format();

const today = () => {
  // write code for dates.today
  let date = moment();
  let day = date.day();
  return moment.weekdays(day);
}

const calendar = () => {
  // write code for dates.calendar
  let date = moment().format('MMM D, YYYY');
  return date;
}

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format('hh:mm:ss A');
  return time;
}

module.exports = {
  today,
  calendar,
  currentTime
}