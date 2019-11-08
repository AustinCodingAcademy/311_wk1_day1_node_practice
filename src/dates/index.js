// import moment here; use this package in each function
var moment = require("moment");
moment().format();

const today = () => {
  // write code for dates.today
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  return n;
};

const calendar = () => {
  // write code for dates.calendar
  var d = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apl",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var strDate =
    months[d.getMonth()] +
    " " +
    ("0" + d.getDate()).slice(-2) +
    ", " +
    d.getFullYear();
  console.log(strDate);
  return strDate;
};

// calendar();

const currentTime = () => {
  time = moment().format("hh:MM:SS A"); //didn't realized I could of used moment, still a good learning experience none the less.
  console.log(time);
  return time;
};

currentTime();
module.exports = {
  today,
  calendar,
  currentTime
};
