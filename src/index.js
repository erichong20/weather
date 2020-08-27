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
      displayAddress: "",
      address: "Issaquah",
      weather: null,
    }

    this.initializeContent = this.initializeContent.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.handleUnload = this.handleUnload.bind(this);

    this.initializeContent();
  }

  componentDidMount(){
    window.addEventListener("beforeunload", this.handleUnload);
  }

  componentWillUnmount(){
    window.removeEventListener("beforeunload", this.handleUnload);
  }

  async initializeContent(){
    const current = localStorage.getItem("currentAddress");

    if(current){
      this.setState({address: await current});
    }

    const weatherObj = await weatherAPI.fetchWeather(this.state.address);
    this.setState({weather: weatherObj});

    const displayAddress = weatherObj.address;
    await this.setState({displayAddress: displayAddress});
  }

  handleUnload(){
    localStorage.setItem("currentAddress",this.state.address);
  }

  async changeAddress(newAddress){
    await this.setState({address: newAddress});
    const weatherObj = await weatherAPI.fetchWeather(this.state.address);

    const displayAddress = weatherObj.address;
    await this.setState({displayAddress: displayAddress});

    await this.setState({weather: weatherObj});
  }

  render(){
    return(
    <div className="pageContainer">
      <div className="main">
        <Header address={this.state.displayAddress}/>
        <Content weather={this.state.weather}/>
        <NewAddress newAddress={this.changeAddress}/>
      </div>
      <Footer />
    </div>
    );
  }
}

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="headerContainer">
        <h1 className="header">Weather in <span className="headerLocation">{this.props.address}</span></h1>
      </div>
    );
  }
}

class NewAddress extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    this.setState({value: ""});
    this.props.newAddress(this.state.value); 
    event.preventDefault(); 
  }

  render(){
    return(
      <form className="newAddress" onSubmit={this.handleSubmit}>
        <input className="newAddressInput" type="text" name="search" value={this.state.value} onChange={this.handleChange} placeholder="New Location" required></input>
        <button className="newAddressSubmit" type="submit" value="submit">Update</button>
      </form>
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