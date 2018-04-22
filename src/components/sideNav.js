import React, { Component } from 'react';
import '../App.css';
import {closeNav} from '../helpers/navs';

class SideNav extends Component {
    constructor(props) {
      super(props);
  
    }
    render(){
        return(
            <div>
                    <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={()=>{closeNav();}}>&times;</a>

                    </div>
            </div>    
        )
    }
}

export default SideNav;



