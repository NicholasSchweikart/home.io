import React, { Component } from 'react';
import ClockDisplay from '../components/ClockDisplay.js';
import TempDisplay from '../components/TempDisplay.js';
import UnlockDock from '../components/UnlockDock';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';
import Grid from 'material-ui/Grid';

const style = {

}

class LockScreen extends Component {
  constructor(props) {
   super(props);
   this.state = {
     localTemp:'--'
   };
  }

  componentWillMount() {
    this.updateWeather();
    this.intervalID = setInterval(
      () => this.updateWeather(),
      60000 * 30 //30 min update interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateWeather = () => {
      const apiKey = 'bbd723044c33ab35d6d92c05535a6759';
      const zip = '78251';
      let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}`
      axios.get(url)
      .then(res=>{
        this.setState({localTemp:Math.floor(res.data.main.temp)});
      })
      .catch((err)=>console.log(err));
    }

  render() {
    return (
      <div className="LockScreen" style={style}>
        <ClockDisplay/>
        <Grid container style = {{textAlign:'center', paddingTop:'30px'}}>
          <Grid item xs={12} sm={6}>
            <TempDisplay temp={this.state.localTemp} label="Outside"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TempDisplay temp={"75"} label="Inside"/>
          </Grid>
        </Grid>
        <UnlockDock changeScreen = {this.props.changeScreen} />
      </div>
    );
  }
}

export default LockScreen;
