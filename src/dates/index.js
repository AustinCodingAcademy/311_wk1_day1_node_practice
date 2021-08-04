// import moment here; use this package in each function
const moment = require('moment');

const today = () => {
  // write code for dates.today
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ]
  var today = new Date();
    const day=today.getDay();
    return weekdays[day];
}

const calendar = () => {
  // write code for dates.calendar
  return moment().format('MMM DD, YYYY');

}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('hh:mm:ss A');
}

module.exports = {
  today,
  calendar,
  currentTime
}