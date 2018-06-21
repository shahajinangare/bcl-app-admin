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
    
      this.registersubmit = this.registersubmit.bind(this);
      this.loginview = this.loginview.bind(this);
      
     }

    
    
     registersubmit(event) {
      event.preventDefault();
      const items ='abcdefghijklmnopqrstuvwxyz'
      var randomnumber ='';
       alert(items.length);4
       for (var i = 0; i < 5; i++)
       randomnumber += items[Math.floor(Math.random()*items.length)];

      fetch('http://localhost:7000/admin/registration', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          name: event.target.regusername.value,
          emailid:event.target.regemailid.value,
          mobileno:event.target.regmobileno.value,
          roleid:'1',
          bussinesscode:event.target.regbussinescode.value,
          pass:randomnumber,
          latlong:'333',
          macaddress:'sdld',
          browser:'dd',
          os:'ss',
          source:'ss',
          createdby:'1',
          createdip:'123.88.88.8'
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            alert(responseJson.code);
              if(responseJson.code = '200')
              {
                
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