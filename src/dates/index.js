var moment = require('moment');
moment().format();

const today = () => {
  let day = moment().format('DDD')
  return day;

}

const calendar = () => {
  let answer = moment().format('MMM DD YYYY')
return answer;
}

const currentTime = () => {
  let time = moment().format('HH:MM:SS a')
return time;
}

module.exports = {
  today,
  calendar,
  currentTime
}