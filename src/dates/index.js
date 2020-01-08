// import moment here; use this package in each function
var moment = require('moment');

const today = () => {
  // write code for dates.today
 return moment().format('dddd')
  console.log(day);
}

const calendar = () => {
  // write code for dates.calendar
  console.log(moment().format('MMM DD, YYYY'))
  return moment().format('MMM DD, YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime
  console.log(moment().format('HH:MM:SS A'));
 return moment().format('HH:MM:SS A')
}

module.exports = {
  today,
  calendar,
  currentTime
}