import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import ArmButton from './ArmButton.js';

//import './css/HomeScreen.css';
const style = {
  root:{
    display: 'flex',
    alignItems: 'center',
    minHeight: '500px',
    width:'100%'
  },
  gridItem:{
    display:'flex',
    justifyContent:'center'
  }
}

class SecurityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <div className="" style={style.root}>
        <Grid container justify="center" alignItems="center" spacing={8}>
          <Grid item xs={12} sm={6} style={style.gridItem}>
            <ArmButton label="Arm Away"/>
          </Grid>
          <Grid item xs={12} sm={6} style={style.gridItem}>
            <ArmButton label="Arm Home"/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SecurityPanel;
