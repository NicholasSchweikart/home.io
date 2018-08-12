import React, { Component } from 'react';
import {Lock} from 'material-ui-icons';
import ButtonBase from 'material-ui/ButtonBase';

const style = {
  root:{
  display: 'inline-block',
  justifyContent: 'center',
  backgroundColor:'rgba(255,255,255,.3)',
  borderRadius: '10px',
  minWidth: '150px',
  height: '150px',
  padding:'15px'
},
label:{
  fontSize:'3.0vw'
}
};

class ArmButton extends Component {

  render() {
    return (
      <ButtonBase focusRipple style={style.root}>
      <Lock style={{fontSize:'80'}}/>
      <div style={style.label}> {this.props.label} </div>
      </ButtonBase>
    );
  }
}

export default ArmButton;
