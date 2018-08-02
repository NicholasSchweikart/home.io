import React, { Component } from 'react';
import TempControlPanel from '../components/TempControlPanel.js';
import IntercomPanel from '../components/IntercomPanel';
import VideoChatPanel from '../components/VideoChatPanel';
import MusicPanel from '../components/MusicPanel';
import PaPanel from '../components/PaPanel';
import Fade from 'material-ui/transitions/Fade';

//import './css/HomeScreen.css';
const style = {
  root:{
    display: 'flex',
    alignItems: 'center',
    minHeight: '500px'
  }
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){

  }

  componentWillUnmount(){
    console.log('unmounting home screen')
  }
  render() {
    return (

      <div className="HomeScreen" style={style.root}>
          {this.props.activePanel === 'temp' && <TempControlPanel/>}
          {this.props.activePanel === 'intercom' && <IntercomPanel/>}
          {this.props.activePanel === 'video-chat' && <VideoChatPanel/>}
          {this.props.activePanel === 'music' && <MusicPanel/>}
          {this.props.activePanel === 'pa' && <PaPanel/>}
      </div>
    );
  }
}

export default HomeScreen;
