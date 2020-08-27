import locationAPI from "./locationAPI.js"

//api handler module
const weatherAPI = (()=>{
  const apiKey = "bcdf233ba619e03521c7d75e5c2349d4";
  
  let displayAddress = "";

  async function fetchWeather(address){

    const coords = await locationAPI.getCoords(address);

    displayAddress = coords[2];

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude={minutely}&appid=${apiKey}`,{mode: 'cors'});

    const weatherData = await response.json();

    const weatherObj = new WeatherObj(weatherData);

    return weatherObj;
  }

  //get most important data from the set
  //weather and weather description, temperature, 
  //wind speed/direction, probability of rain
  //forecast for next four days with weather, high temp, low temp
  function WeatherObj(data){
    this.currentWeather = data.current.weather[0].main;
    this.currentDescription = data.current.weather[0].description;
    //in kelvin
    this.currentTemp = data.current.temp;
    this.windSpeed = data.current.wind_speed;
    this.windDirection = calculateDirection(data.current.wind_deg);

    this.clouds = data.hourly[0].clouds;
    //rain forecast, hourly
    this.rainForecast = data.daily[0].pop;

    this.forecast = data.daily;

    this.icon = data.current.weather[0].icon;

    this.address = displayAddress;
  }

  function calculateDirection(deg){
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.floor((deg / 45)) % 16;
    return directions[index];
  }

  return {
    fetchWeather    
  }
})();

export default weatherAPI;