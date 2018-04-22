import React, { Component } from 'react';
import '../App.css';
import {showUserDetails} from '../helpers/showUserDetails';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state={
        username:'',
        email:'',
        isSet:false
    }
  }
  changeUsername(imput)
  {
      this.setState({
          username:imput
      },console.log(this.state));
  }
  changeEmail(imput)
  {
      this.setState({
          email:imput
      },console.log(this.state));
  }

  render(){
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                    <button className="btn btn-primary btn-sm" data-target="#loginModal" data-toggle="modal">Login</button>
                        <div className="modal" id="loginModal" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                       
                                        <h3 className="modal-title pull-left">Hi there User ! </h3>
                                    </div>
                                    <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input className="form-control"
                                                   placeholder="Enter Username"
                                                   type="text"
                                                   id="username"
                                                   value={this.state.username}
                                                   onChange={(e)=>this.changeUsername(e.target.value)}
                                            />                                        
                                        </div>
                                        <div className="form-group">
                                            <label>Email ID</label>
                                            <input className="form-control"
                                                   placeholder="Enter Username"
                                                   type="text"
                                                   id="email"
                                                   value={this.state.email}
                                                   onChange={(e)=>this.changeEmail(e.target.value)}
                                            />
                                        </div>                                        
                                    </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-primary" data-dismiss="modal" onClick={()=>{showUserDetails(this.state.username,this.state.email)}}>Login</button>
                                        <button className="btn btn-primary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

  }

}

export default Login;