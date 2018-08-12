import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import IconButton from 'material-ui/IconButton';
import {AcUnit, Security} from 'material-ui-icons';
import Tabs, { Tab } from 'material-ui/Tabs';

const style = {
  textAlign:'center',
  fontSize: '1.5vw',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  paddingBottom: '5px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)'
};

class BottomDock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  componentWillUnmount(){
    this.props.changePanel('temp');
  }
 handleChange = (event, value) => {

   this.setState({ value });
   const panels = ['temp','security'];
   this.props.changePanel(panels[value]);
 };

  render() {
    return (
      <div style={style}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<AcUnit />} />
          <Tab icon={<Security />} />
        </Tabs>
      </div>
    );
  }
}

export default BottomDock;
