/*
const cloudCoveragePercent = +prompt('What is the cloud coverage in % (0-100)?');
const weatherCond = (cloudCoveragePercent >= 0 && cloudCoveragePercent <= 100 ? cloudCoveragePercent > 40 ? 'cloudy' : 'sunny' : null);
weatherCond ? console.log(`It's a ${weatherCond} day!`) : null;
*/

const now = new Date();
const day = now.getDay();
//const day = Math.floor(Math.random()*7);
let dayOfWeekString;

switch(day) {
    case 0:
        dayOfWeekString = 'Sunday';
        break;
    case 1:
        dayOfWeekString = 'Monday';
        break;
    case 2:
        dayOfWeekString = 'Tuesday';
        break;
    case 3:
        dayOfWeekString = 'Wednesday';
        break;
    case 4:
        dayOfWeekString = 'Thursday';
        break;
    case 5:
        dayOfWeekString = 'Friday';
        break;
    case 6:
        dayOfWeekString = 'Saturday';
        break;
}
document.getElementById("weekday").innerHTML = dayOfWeekString;