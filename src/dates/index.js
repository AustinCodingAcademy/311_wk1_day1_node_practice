// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  // write code for dates.today
  const day = moment().format('dddd');
  return day;
}

const calendar = () => {
  // write code for dates.calendar
  const cal = moment().format('LL');
  return cal;
}

const currentTime = () => {
  // write code for dates.currentTime
  const time = moment().format('LTS');
  return time;
}


module.exports = {
  today,
  calendar,
  currentTime
}