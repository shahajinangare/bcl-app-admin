import React, { Component } from 'react';
import VWLoginContent from '../../view/users/logincontent.jsx';
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
          <VWLoginContent  login={this}/>
      )
    }
//     render() {
//       console.log(this.state.outData);
//     return <div>
        
   
//   <div>
//   <label  > {this.state.ErrorMsg}</label><br/> <br/>
//   <div>
// 		<div className="text-center" style={{padding:'50px 0'}}>
// 			<div className="logo">login</div>
// 			<div className="login-form-1">
//       <form onSubmit={this.handleSubmit} >
// 					<div className="login-form-main-message"></div>
// 					<div className="main-login-form">
// 						<div className="login-group">
// 							<div className="form-group">
// 								<label htmlFor="lg_username" className="sr-only">Username</label>
// 								<input type="email" className="form-control" id="emailid" name="emailid" placeholder="username" required />
// 							</div>
// 							<div className="form-group">
// 								<label htmlFor="lg_password" className="sr-only">Password</label>
// 								<input type="password" className="form-control" id="password" name="password" placeholder="password" required/>
// 							</div>
// 						</div>
// 						<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
// 					</div>
// 					<div className="etc-login-form">
// 						<p>forgot your password? <a href="#">click here</a></p>
// 						<p>new user? <a href="#">create new account</a></p>
// 						<button className="login-button" type="submit" > <i className="fa fa-chevron-right"></i></button>
// 						<button className="login-button" type="submit" > <i className="fa fa-chevron-right"></i></button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// </div>
    
//     </div>
//   </div>;
//   }

  }

  export default Login;