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

class PaPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <div className="" style={style.root}>
          <h1>PA</h1>
      </div>
    );
  }
}

export default PaPanel;
