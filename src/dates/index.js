// import moment here; use this package in each function
const moment = require('moment')
const today = () => {
  // write code for dates.today
  return moment().format("dddd"); 
  // console.log(moment().format("dddd") );
}
// today();
const calendar = () => {
  // write code for dates.calendar
  return moment().format("MMM DD, YYYY");
  // console.log(moment().format("MMMM DD, YYYY"));
}
// calendar()
const currentTime = () => {
  // write code for dates.currentTime
  return moment().format("hh:mm:ss A");
  // console.log(moment().format("hh:mm:ss a"))
}
// currentTime()
module.exports = {
  today,
  calendar,
  currentTime
}