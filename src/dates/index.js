// import moment here; use this package in each function
var moment = require('moment');


const today = () => {
  // write code for dates.today
 const d = new Date().getDay()
  if (d == 0) {
    return 'Sunday'
  }
  else if (d == 1) {
    return 'Monday'
  }
  else if (d == 2) {
    return 'Tuesday'
  }
  else if (d == 3) {
    return 'Wednesday'
  }
  else if (d == 4) {
    return 'Thursday'
  }
  else if (d == 5) {
    return 'Friday'
  }
  else {
    return 'Saturday'
  }
}

//today()

const calendar = () => {
  // write code for dates.calendar
  return moment().format('MMM DD, YYYY');
  
}
//calendar()

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('hh:mm:ss A');
 
}

//currentTime()

module.exports = {
  today,
  calendar,
  currentTime
}