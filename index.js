//Problem: Get the weather for a post code or a city and state
//Solution: A console application that fetches the information for the user

const weather = require('./weather.js');

const locations = process.argv.slice(2);
locations.forEach(function(location){
  if(isNaN(location)){
    weather.getWeatherCity(location);
  } else{
    weather.getWeatherZip(location);
  }
});