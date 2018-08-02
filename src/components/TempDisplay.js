import React, { Component } from 'react';

const style = {
  root:{
    textAlign:'center',
    display: 'inline-block',
    margin: 'auto',
    padding: '10px'
  },
  mainTemp:{
    fontSize: '9.0vw',
  },
  label:{
    fontSize: '3.0vw',
  }
};

class TempDisplay extends Component {
  render() {
    return (
      <div style={style.root}>
        <div style={style.mainTemp}>{this.props.temp}&deg;F</div>
        <div style={style.label}>{this.props.label}</div>
      </div>
    );
  }
}

export default TempDisplay;
