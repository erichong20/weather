import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './reset.css';
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Bold.ttf'

import weatherAPI from "./weatherAPI.js"
import Content from "./content.js"

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: "Issaquah"
    }
  }

  render(){
    return(
    <div className="pageContainer">
      <div className="main">
        <Header address={this.state.address}/>
        <Content address={this.state.address}/>
      </div>
      <Footer />
    </div>
    );
  }
}

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: props.address
    }
  }

  render(){
    weatherAPI.fetchWeather(this.state.address);
    return(
      <div className="headerContainer">
        <h1 className="header">Weather in <span className="headerLocation">{this.state.address}</span></h1>
      </div>
    );
  }
}

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <p>
          made by <a href="https://github.com/erichong20">eric hong</a> using{" "}
          <a href="https://reactjs.org/">React</a>
        </p>
      </footer>
    );
  }
}



ReactDOM.render(
  <Home />,
  document.getElementById('root')
);