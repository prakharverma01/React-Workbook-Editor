import React, { Component } from 'react';
import {addElement} from './helpers/addElement'

class Main extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    return (
      <div>
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

export default Main;