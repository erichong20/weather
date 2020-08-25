import React from 'react';

import wind from "./imgs2/013-wind.png"
import rainDrop from "./imgs2/014-drop.png"
import cloud from "./imgs2/015-cloud.png"

class WeatherCard extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      data: props.data,
      isCelsius: true,
      isKph: false
    };
  }

  toCelsius(temp){
    return Math.round((temp-273.15)*100)/100;
  }

  toFahrenheit(temp){
    return Math.round(((temp-273.15) * (9/5) + 32)*100)/100;
  }

  toMph(speed){
    return Math.round((speed*2.237)*100)/100;
  }

  toKph(speed){
    return Math.round((speed*3.6)*100)/100;
  }

  render(){
    return(
      <div className="weatherCard">
        <div className="primaryWeather">
          <div className="currentTemp">{this.toCelsius(this.state.data.currentTemp)}&#176;</div>
          <div className="current description">{this.state.data.currentDescription}</div>
        </div>

        <div className="secondaryContainer">
          <div className="secondaryDisplay">
            <img src={wind} alt="wind"/>
            {this.toKph(this.state.data.windSpeed)}kph {this.state.data.windDirection}
          </div>
          <div className="secondaryDisplay">
            <img src={rainDrop} alt="Rain"/>
            {this.state.data.rainForecast}%
          </div>
          <div className="secondaryDisplay">
            <img src={cloud} alt="cloud"/>
            {this.state.data.clouds}%
          </div>
        </div>
        
        <div className="forecast">
          
        </div>
      </div>
    );
  }
}

export default WeatherCard