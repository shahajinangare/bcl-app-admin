import React, { Component } from 'react';
import VWRegisterContent from '../../view/users/register';
import '../../assets/stylesheets/login.css';
import Login from '../../components/users/login';
import ReactDOM from 'react-dom';

class Register extends Component {
  constructor(props) {
    super(props);
      
      this.state = {
      ErrorMsg:''
      };
    
      //this.loginsubmit = this.loginsubmit.bind(this);
      this.loginview = this.loginview.bind(this);
     }

  loginview(event){
        ReactDOM.render((<Login/>),document.getElementById("main-content"));
      }
  
    render() {
      return (
          <VWRegisterContent register={this}/>
      )
    }
  }

  export default Register;