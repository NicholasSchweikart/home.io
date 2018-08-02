import React, { Component } from 'react';
import {KeyboardArrowDown, KeyboardArrowUp} from 'material-ui-icons';
import IconButton from 'material-ui/IconButton';

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  backgroundColor:'rgba(255,255,255,.3)',
  borderRadius: '10px',
  minWidth: '150px',
};

class TempControlButton extends Component {

  render() {
    return (
      <div style={style}>
        <IconButton ><KeyboardArrowUp onClick = {()=>this.props.increaseTemp()} style={{fontSize:'55'}}/></IconButton>
        <IconButton onClick = {()=>this.props.decreaseTemp()}><KeyboardArrowDown style={{fontSize:'55'}}/></IconButton>
      </div>
    );
  }
}

export default TempControlButton;
