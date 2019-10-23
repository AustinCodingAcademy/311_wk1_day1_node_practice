// import moment here; use this package in each function

const today = () => {
  // write code for dates.today
  let d = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let n = weekday[d.getDay()];
  return n;
}

const calendar = () => {
 var moment = require('moment');
 return moment().format('MMM DD, YYYY');

  }


const currentTime = () => {
  // write code for dates.currentTime
  var moment = require('moment');
  return moment().format("hh:mm:ss A");
}

module.exports = {
  today,
  calendar,
  currentTime
}