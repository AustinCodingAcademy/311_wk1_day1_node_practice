// import moment here; use this package in each function
var moment = require("moment");
moment().format();

const today = () => {
  const day = moment().format("dddd");
  return day;
};

const calendar = () => {
  const month = moment().format("MMM DD, YYYY");
  return month;
};

// calendar();

const currentTime = () => {
  const time = moment().format("hh:MM:SS A");
  console.log(time);
  return time;
};

currentTime();
module.exports = {
  today,
  calendar,
  currentTime
};
