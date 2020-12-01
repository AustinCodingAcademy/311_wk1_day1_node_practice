// import moment here; use this package in each function

const moment = require("moment")

const today = () => {
  // write code for dates.today
  let c = new Date();
  c.get
}

const calendar = () => {
  // write code for dates.calendar
  let d = new Date();
  let myMonth =   d.toLocaleString('default', { month: 'long' });
  let myDate = d.getDate();
  let myYear = d.getFullYear();
  let z = myMonth + " " + myDate +", " + myYear
  return z
}

const currentTime = () => {
  // write code for dates.currentTime
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let x = h + ":" + m + ":" + s + " PM";
  return x
}

module.exports = {
  today,
  calendar,
  currentTime
}