import React from 'react';

import weatherAPI from "./weatherAPI.js"
import WeatherCard from "./weatherCard.js"

class Content extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      address: props.address,
      weather: null
    }

    this.initializeContent();
  }

  async initializeContent(){
    const weatherObj = await weatherAPI.fetchWeather(this.state.address);
    this.setState({weather: weatherObj});
    console.log(this.state.weather.currentDescription);
  }

  render(){
    if(this.state.weather===null){
      return(
        <div className="loadingContainer">
          <div className="loading">Loading</div>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      );
    } else {
      return(
        <div className="content">
          <WeatherCard data={this.state.weather}/>
        </div>
      );
    }
  }
}

export default Content