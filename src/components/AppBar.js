import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Lock from 'material-ui-icons/Lock';

const style = {
  textAlign:'right',
  fontSize: '1.5vw',
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end'
};

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleLock = () =>{
    this.props.changeScreen('lockScreen');
  }

  render() {
    return (
      <div style={style}>
        <IconButton
          onClick = {this.handleLock}
        >
          <Lock style={{fontSize:36}}></Lock>
        </IconButton>
      </div>
    );
  }
}

export default AppBar;
