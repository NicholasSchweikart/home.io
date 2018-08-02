import React, { Component } from 'react';
import moment from 'moment';

const style = {
  root:{
    textAlign:'left',
    padding: '20px',
    display: 'inline-block'
  },
  clockTime:{
    fontSize: '13.0vw',
  },
  clockDate:{
    textAlign: "center",
    fontSize: '3.0vw',
  }
};

class ClockDisplay extends Component {
  constructor(props) {
   super(props);
   this.state = {
     now: {time:moment().format('h:mm: a'), day:moment().format('dddd, MMMM, Do')}
   };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () =>{
    this.setState({
      now: {time:moment().format('h:mm a'), day:moment().format('dddd, MMMM Do')}
    });
  }
  render() {
    return (
      <div style={style.root}>
        <div style={style.clockTime}>{this.state.now.time}</div>
        <div style={style.clockDate}>{this.state.now.day}</div>
      </div>
    );
  }
}

export default ClockDisplay;
