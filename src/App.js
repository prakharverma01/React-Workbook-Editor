import React, { Component } from 'react';
import SideNav from './components/sideNav';
import TopBar from './components/topBar';
import {addElement} from './helpers/addElement'
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
        <div>
          <input type="text" id="start" placeholder="Untitled item..."/>  
        <br></br>
        <br></br>        
          <input type="text" id="subs" placeholder="SubHeadings goes here !" onKeyPress={(e)=>{addElement(e)}}/><br></br>
        </div>    
        <div id="adds" className="addsClass">
        <br></br>
        </div> 
      </div>
    );
  }
}

export default App;
