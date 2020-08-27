import React from 'react';

import wind from "./imgs2/013-wind.png"
import rainDrop from "./imgs2/014-drop.png"
import cloud from "./imgs2/015-cloud.png"

class WeatherCard extends React.Component {
  
  constructor(props){
    super(props);
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

    let temp;
    if (this.props.isMetric){
      temp = this.toCelsius(this.props.data.currentTemp) + " \u00b0C";
    } else {
      temp = this.toFahrenheit(this.props.data.currentTemp) + " \u00b0F";
    }

    let windVal;
    if (this.props.isMetric){
      windVal = this.toKph(this.props.data.windSpeed) + "kph";
    } else {
      windVal = this.toMph(this.props.data.windSpeed) + "mph";
    }

    return(
      <div className="cardContainer">
        <div className="primaryContainer">
          <div className="weatherIconContainer">
            <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${this.props.data.icon}@2x.png`}></img>
          </div>

          <div className="primaryWeather">
            <div className="currentTemp">{temp}</div>
            <div className="currentDescription">{this.props.data.currentDescription}</div>
          </div>

          <div>
            <div className="unitsContainer">
              <button name="metric" className= {(this.props.isMetric ? "unitSelected" : "unitNotSelected")+ " unitButton"} onClick={this.props.changeUnits}>Metric</button>
              <button name="imperial" className={(this.props.isMetric ? "unitNotSelected" : "unitSelected") + " unitButton"} onClick={this.props.changeUnits}>Imperial</button>
            </div>
          </div>
        </div>

        <div className="secondaryContainer">
          <div className="secondaryDisplay">
            <img src={wind} alt="wind"/>
            {windVal} {this.props.data.windDirection}
          </div>

          <div className="secondaryDisplay">
            <img src={rainDrop} alt="Rain"/>
            {this.props.data.rainForecast*100}%
          </div>

          <div className="secondaryDisplay">
            <img src={cloud} alt="cloud"/>
            {this.props.data.clouds}%
          </div>
        </div>
        
        <div className="forecast">
          
        </div>

      </div>
    );
  }
}

export default WeatherCard