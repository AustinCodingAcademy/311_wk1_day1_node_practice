// import moment here; use this package in each function
var moment = require('moment');
moment().format();

const today = () => {
  let currentDate = moment().format('dddd');
  return currentDate;
}

const calendar = () => {
  let cal = moment().format('MMM DD, YYYY')
  return cal;
}

const currentTime = () => {
  // write code for dates.currentTime
}

module.exports = {
  today,
  calendar,
  currentTime
}