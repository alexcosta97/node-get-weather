const https = require('https');
const http = require('http');
const APIKEY = '4210250c3a7fb46ae7a6401ea4e72e29';

//Function to print error messages

function printError(error){
  console.error(error.message);
}

//Connect to the API URL for a city
function getWeatherCity(location){
  try{
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${APIKEY}`, res => {
      if(res.statusCode === 200){
          //Read the data
          let body = '';
          res.on('data', chunk =>{
            body+= chunk.toString();
          });
          //Parse the data
          res.on('end', () =>{
            try{
              const weather = JSON.parse(body);
              printWeather(weather.name, weather.main.temp);
            } catch(error){
              printError(error);
            }
          });
        }else{
          const message = `There was an error getting the weather for ${location}: (${http.STATUS_CODES[res.statusCode]})`;
          const statusCodeError = new Error(message);
          printError(statusCodeError);
        }
      });
  } catch(error){
    printError(error);
  }
}

//Connect to the API URL for a post code
function getWeatherZip(postCode){
  try{
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${postCode}&units=metric&APPID=${APIKEY}`, res => {
      if(res.statusCode === 200){
        //Read the data
        let body = '';
        res.on('data', chunk => {
          //Read the data
          body += chunk.toString();
        }).on('end', () => {
          //Parse the data
          try{
            const weather = JSON.parse(body);
            printWeather(weather.name, weather.main.temp);
          } catch(error){
            printError(error);
          }
        });
      } else{
        const message = `There was an error getting the weather for ${postCode}: (${http.STATUS_CODES[res.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
    });
  } catch(error){
    printError(error);
  }
}

//Print the weather
function printWeather(location, temperature){
  console.log(`Current temperature for ${location} is ${temperature} C`);
}

exports.getWeatherCity = getWeatherCity;
exports.getWeatherZip = getWeatherZip;