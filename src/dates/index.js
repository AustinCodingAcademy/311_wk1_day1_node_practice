// import moment here; use this package in each function
var moment = require('moment');

const today = () => {
    // write code for dates.today
    return moment().format('dddd');
}

const calendar = () => {
    // write code for dates.calendar      
    return moment().format('MMM d, YYYY');
}

const currentTime = () => {
    // write code for dates.currentTime
    return moment().format('h:mm:ss A');
}

module.exports = {
    today,
    calendar,
    currentTime
}