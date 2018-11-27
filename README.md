# node-get-weather
Small app to get location weather from the OpenWeatherMap API

To use the app, do the following:
* Clone the repository
* Add a `api.json` file to the project with the following data:
```json
{
    "key": "enter your key here"
}
```
* Run the app using `node index [locations]`

The app uses the OpenWeatherMap API to fetch the temperature for the selected locations and gives them to you in the terminal.

A location can either be a city or state name or a US zip code.