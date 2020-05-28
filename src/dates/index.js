// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  // write code for dates.today
  const day = moment().format('dddd');
  console.log(day);
  return day;
}
today();

const calendar = () => {
  // write code for dates.calendar
  const cal = moment().format('LL');
  console.log(cal);
  return cal;
}
calendar();

const currentTime = () => {
  // write code for dates.currentTime
  const time = moment().format('h:mm:ss a');
  console.log(time);
  return time;
}
currentTime();


module.exports = {
  today,
  calendar,
  currentTime
}