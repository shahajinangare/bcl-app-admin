import React, { Component } from 'react';
import VWLoginContent from '../../view/users/logincontent.js';
import VWRegisterContent from '../../view/users/register';
import '../../assets/stylesheets/login.css';
import MainComponent from '../../view/common/main';
import ReactDOM from 'react-dom';
import MenuContent from '../common/adminmenu.js';
class Login extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      ErrorMsg:''
      };
    
      this.handleSubmit = this.handleSubmit.bind(this);
      //const { onCustomClick } = this.props
    }
    

    // handleClick = event => {
    //   if (this.props.onClick) {
    //     this.props.onClick(event)
    //   }
  
    //   if (this.props.onCustomClick) {
    //     this.props.onCustomClick(event)
    //   }
    // }

    componentDidMount() {

    }

    handleSubmit(event) {
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
            alert(responseJson.code);
              if(responseJson.code==="200")
              {

                ReactDOM.render((<MainComponent />), document.getElementById("root"));
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

    render() {
      return (
          
          <div>
          <VWLoginContent/>
          <button className="login-button" type="button"  onClick={this.getmenu.bind()}>Get Menu</button>
          </div>
      )
    }
  }

  export default Login;