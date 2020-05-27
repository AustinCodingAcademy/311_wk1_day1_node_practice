var moment = require('moment');
//documentation for moment can be found at the url below
// https://momentjs.com/docs/

const today = () => {
  return moment().format('dddd')
}

const calendar = () => {
  return moment().format("LL")
}

const currentTime = () => {
  return moment().format("HH:MM:SS A")
}

module.exports = {
  today,
  calendar,
  currentTime
}