import React, { Component } from 'react';
import SideNav from './components/sideNav';
import TopBar from './components/topBar';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      heading:[],
      subs:[]
    }
  }
  render() {
    return (
      <div className="App">
        <SideNav/>
        <TopBar/> 
        <br></br>
        <br></br>
        <br></br>
        <Main/>
        <br></br>
        </div> 
    );
  }
}

export default App;
