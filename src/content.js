import React from 'react';

import weatherAPI from "./weatherAPI.js"
import WeatherCard from "./weatherCard.js"

class Content extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isMetric: true
    }

    this.changeUnits = this.changeUnits.bind(this);
  }

  changeUnits(event){
    if(event.target.name==="metric"){
      this.setState({isMetric: true});
    } else {
      this.setState({isMetric: false});
    }
  }

  render(){
    if(this.props.weather===null){
      return(
        <div className="loadingContainer">
          <div className="loading">Loading</div>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      );
    } else {
      return(
        <div className="content">
          <WeatherCard data={this.props.weather} isMetric={this.state.isMetric} changeUnits={this.changeUnits}/>
        </div>
      );
    }
  }
}

export default Content