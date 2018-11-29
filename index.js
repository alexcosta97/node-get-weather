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

//@TODO: Create models to store weather per city (city with postcodes), weather(refs city)
//@TODO: Create model-specific find methods
//@TODO: Create controllers to get and put weather
//@TODO: Create routes for get controllers
//@TODO: Create main server program with event scheduler to get updated weather