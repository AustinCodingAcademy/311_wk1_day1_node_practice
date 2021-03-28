var moment = require('moment'); // require
moment().format(); 

function today(){

  return moment().format('dddd'); 
}

console.log(today()); 

function calendar(){
  
  return moment().format('ll'); 

}



function currentTime(){
  
  return moment().format('hh:mm:ss A');

}


module.exports = {
  today,
  calendar,
  currentTime
}