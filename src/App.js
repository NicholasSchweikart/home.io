import React, { Component } from 'react';


import AppBar from './components/AppBar.js';

import LockScreen from './pages/LockScreen';
import HomeScreen from './pages/HomeScreen';
import Backdrop from './components/Backdrop';
import BottomDock from './components/BottomDock';

const style = {
  fontFamily: "'Roboto', 'sans-serif'",
  color:'rgba(0, 0, 0, 0.65)',
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'lockScreen',
      backdrop: 'clear',
      activePanel: 'temp'
    };
  }

  changeScreen = (screen) => {
    console.log('screen -> ' + screen)
    let bd = 'blur';
    if(screen === 'lockScreen'){bd = 'clear';}
    this.setState({activeScreen:screen, backdrop:bd});
  }

  changePanel = (panel) =>{
    console.log('panel -> ' + panel)
    this.setState({activePanel:panel});
  }
  render() {
    return (
        <div style={style}>
          {this.state.activeScreen !== 'lockScreen' && <AppBar changeScreen = {this.changeScreen} />}

          {this.state.activeScreen === 'lockScreen' && <LockScreen changeScreen={this.changeScreen}/>}
          {this.state.activeScreen === 'homeScreen' && <HomeScreen changeScreen={this.changeScreen} activePanel={this.state.activePanel}/>}

          {this.state.activeScreen === 'homeScreen' && <BottomDock changePanel={this.changePanel}/>}
          <Backdrop className={this.state.backdrop}/>
        </div>
    );
  }
}

export default App;
