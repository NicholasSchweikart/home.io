import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import LockOpen from 'material-ui-icons/LockOpen';
const style = {
  root:{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.5vw',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    paddingBottom: '5px',
  },
  blurDiv:{
    position:'absolute',
    width:'100%',
    height:'100%',
    filter:'blur(1px)',
    backgroundColor:'rgba(180,230,230,0.7)',
    borderRadius:'23px',
    zIndex:'-1'
  }
};

class UnlockDock extends Component {
  state = {
   value: 0,
 };

 handleChange = (event, value) => {
 };

  render() {
    return (
      <div style={style.root}>
      <IconButton
        onClick = {() => this.props.changeScreen('homeScreen')}
      >
        <LockOpen style={{fontSize:36}}></LockOpen>
        
      </IconButton>
      </div>
    );
  }
}

export default UnlockDock;
