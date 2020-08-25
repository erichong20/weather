import React from 'react';

class Forecast extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: props.data
    };
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}

export default Forecast;