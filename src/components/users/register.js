import React, { Component } from 'react';
import VWRegisterContent from '../../view/users/register';
import '../../assets/stylesheets/login.css';
import Login from '../../components/users/login';
import ReactDOM from 'react-dom';
import { deviceDetect } from 'react-device-detect';
import publicIP from 'react-native-public-ip';

class Register extends Component {
   
  constructor(props) {
    super(props);
      
      this.state = {
      ErrorMsg:'',
      roles:[],
      type:'',
      };
    
      this.registersubmit = this.registersubmit.bind(this);
      this.loginview = this.loginview.bind(this);
      
     }
      componentDidMount() {
      this.getAllrole();
    }

     getAllrole(){
      fetch('http://localhost:7000/admin/getroles', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
     
      }).then((response) => response.json())
          .then((responseJson) => {
           
              if(responseJson.code = '200')
              {
                let RolesFromApi = responseJson.result.map(role => { return {roleid: role.roleid, rolename: role.rolename} })
                this.setState({ roles: [{roleid: '', rolename: 'Select role'}].concat(RolesFromApi) });
                this.setState({
                  type:'new1'
                })
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
     
      registersubmit(event) {
      event.preventDefault();
      let IPaddress='';
     
      const items ='abcdefghijklmnopqrstuvwxyz'
      var randomnumber ='';
     
       for (var i = 0; i < 5; i++)
       randomnumber += items[Math.floor(Math.random()*items.length)];
       const deviceinfo= deviceDetect();

       publicIP().then(ip => {
        console.log(ip);
        IPaddress =ip;
      });

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
          roleid:event.target.roleid.value,
          bussinesscode:event.target.regbussinescode.value,
          pass:randomnumber,
          latlong:'333',
          macaddress:'sdld',
          browser:deviceinfo.browserName,
          os:deviceinfo.osName,
          source: deviceinfo.engineName,
          createdby:IPaddress,
          createdip:'123.88.88.8'
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
           
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