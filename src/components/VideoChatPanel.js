import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

//import './css/HomeScreen.css';
const style = {
  root:{
    display: 'flex',
    alignItems: 'center',
    minHeight: '500px',
    width:'100%'
  }
}

class VideoChatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <div className="" style={style.root}>
          <h1>Video</h1>
      </div>
    );
  }
}

export default VideoChatPanel;
