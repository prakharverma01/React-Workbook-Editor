import React, { Component } from 'react';
import '../App.css';
import Login from './login';
import SideNav from './sideNav';
import {openNav} from '../helpers/navs';

class TopBar extends Component {
    constructor(props) {
      super(props);
  
    }
    render(){
        return(
            <div>
                    <div className="row">
                    <div className="col-sm-3"> 
                    <div className="row">
                        <div className="col-sm-6 row1">
                        <div className="row">
                        <div className="col-sm-6 row1 center addShadow">
                            <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/97202-200.png"
                                width="40px"
                                height="40px"
                                title="Click to Open the Menu" 
                                onClick={()=>{openNav();}}                                       
                            />
                        </div>  
                        <div className="col-sm-6 row1 center">
                            <img src="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-07-512.png"
                                width="35px"
                                height="35px"
                                title="Lets learn React.js"
                            />
                        </div>
                        </div>
                        </div>
                        <div className="col-sm-6 addShadow row1">sub2</div>
                    </div>
                    </div>

                    <div className="col-sm-6 row1 addShadow" id="userDetails">  </div>

                    <div className="col-sm-3"> 
                        <div className="row">
                            
                            <div className="col-sm-6 row1"><Login/></div>
                            <div className="col-sm-6 row1 addShadow"> Clear All !</div>
                        </div>
                    </div>        

                    </div>                
            </div>   
        )
    }
}

export default TopBar;



