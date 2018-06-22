import React, { Component } from 'react';
import LoginContent from '../../view/users/logincontent';
import '../../assets/stylesheets/login.css';
import HomeComponent from '../../view/common/home';
import ReactDOM from 'react-dom';
import MenuContent from '../../components/common/adminmenu';
import RegisterContent from '../../view/users/register';
import ForgotpassContent from '../../components/users/forgotpass';
import Register from '../../components/users/register';
import { deviceDetect } from 'react-device-detect';
class Login extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      ErrorMsg:''
      };
    
      this.loginsubmit = this.loginsubmit.bind(this);
      this.forgotpasssubmit = this.forgotpasssubmit.bind(this);
      this.registersubmit = this.registersubmit.bind(this);

       
    }
    componentDidMount() {
      const deviceinfo= deviceDetect();
      console.log(deviceinfo);
    }

    loginsubmit(event) {
      event.preventDefault();
      fetch('http://localhost:7000/admin/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          emailid: event.target.emailid.value,
          password:event.target.password.value
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
              if(responseJson.code = '200')
              {
                ReactDOM.render((<HomeComponent />), document.getElementById("main-content"));
              }
              else
              {
                this.setState({
                  ErrorMsg: responseJson.message
                });
              }
            return responseJson.result;
          })
          .catch((error) => {
            console.error(error);
          });
    }
    getmenu() {      
      ReactDOM.render((<MenuContent />), document.getElementById("menu-root"));   
    }
    
    forgotpasssubmit(event) {
    
      ReactDOM.render((<ForgotpassContent />), document.getElementById("main-content"));  
     
    }
    registersubmit(event) {
     
      ReactDOM.render((<Register />), document.getElementById("main-content"));  
    }

    render() {
      return (
          <LoginContent login={this}/>
      )
    }
  }

  export default Login;