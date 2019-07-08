import React, { Component } from 'react';
import './App.css';
import Calender from './Calender';
import Toolbar from './Navbar';
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
     <div style={{height: '100%'}}>
    
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop: '64px'}}>
        <Calender />
      </main>

    </div>
  );
}
}

export default App;
