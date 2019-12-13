'// import moment here; use this package in each function
';

const today = () => {
  const day = moment().format("dddd");
  console.log("Today is: ",day);
  return day;
}

const calendar = () => {
  // write code for dates.calendar
const date = moment().format("LL");
console.log("Today's date is:", date);
return date;
};

const currentTime = () => {
  // write code for dates.currentTime
const time = moment().format('hLTS')
console.log("The current time is: ", time)
return time 
};

module.exports = {
  today,
  calendar,
  currentTime
};