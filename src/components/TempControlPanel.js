import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TempDisplay from './TempDisplay.js';
import TempControlButton from './TempControlButton.js';

//import './css/HomeScreen.css';
const style = {
  root:{
    display: 'flex',
    alignItems: 'center',
    minHeight: '500px',
    width:'100%'
  }
}

class TempControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: 80,
      targetTemp: 80
    };
  }

  increaseTemp = () =>{
    let t = this.state.targetTemp + 1;
    this.setState({targetTemp:t});
  }
  decreaseTemp = () =>{
    let t = this.state.targetTemp - 1;
    this.setState({targetTemp:t});
  }
  render() {
    return (

      <div className="" style={style.root}>
          <TempDisplay temp={this.state.currentTemp} label="Current" />
          <TempControlButton
            decreaseTemp = {this.decreaseTemp}
            increaseTemp = {this.increaseTemp}
            />
          <TempDisplay temp={this.state.targetTemp} label="Target" />
      </div>
    );
  }
}

export default TempControlPanel;
