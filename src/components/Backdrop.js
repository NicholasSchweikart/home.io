import React, { Component } from 'react';
import rainyBackground from '../pages/images/rainy-background.png';
//import './css/HomeScreen.css';
const style = {
  position:'absolute',
  zIndex:'-1',
  backgroundImage: `url(${rainyBackground})`,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  top:'0',
  transition:'filter .5s ease'
}

class Backdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (

      <div className={this.props.className} style={style}>

      </div>
    );
  }
}

export default Backdrop;
