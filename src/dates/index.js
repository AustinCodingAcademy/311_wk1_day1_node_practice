// import moment here; use this package in each function

const today = () => {
  // write code for dates.today
  return moment().format("dddd");

}

const calendar = () => {
  // write code for dates.calendar
  return moment().format("MMM DD, yyyy");
}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format("hh:mm:ss A");
}

module.exports = {
  today,
  calendar,
  currentTime
}