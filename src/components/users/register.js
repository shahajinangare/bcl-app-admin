import React, { Component } from 'react';
import VWRegisterContent from '../../view/users/register';
import '../../assets/stylesheets/login.css';
import Login from '../../components/users/login';
import ReactDOM from 'react-dom';
import { deviceDetect } from 'react-device-detect';
import publicIP from 'react-native-public-ip';
import Userdetail from '../../components/users/userlist';


class Register extends Component {
   
   constructor(props) {
    super(props);

    //const params = new URLSearchParams(props.location.search);
    let id='';
    if(props.register !== undefined)
    {
      id= props.register.row._original.userid;
    }
    
      this.state = {
      ErrorMsg:'',
      roles:[],
      type:'',
      Uid : id,
      upd_userid:'',
      upd_username:'',
      upd_useremailid:'',
      upd_usermobileno:'',
      upd_userbussinesscode:'',
      upd_userroleid:'',
      
      };
    
      this.registersubmit = this.registersubmit.bind(this);
      this.Updatesubmit = this.Updatesubmit.bind(this);
     
      this.handleSelectChange = this.handleSelectChange.bind(this);
      
    }
    
      componentDidMount() {
       
      this.getAllrole();
      if(this.state.Uid.length !== 0)
      {
         this.getUserById(this.state.Uid);
      }
    }
    handleSelectChange(event) {
     this.setState({upd_userroleid: event.target.value});
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
           
              if(responseJson.code == '200')
              {
                let RolesFromApi = responseJson.result.map(role => { return {roleid: role.roleid, rolename: role.rolename} })
                this.setState({ roles: [{roleid: '', rolename: 'Select role'}].concat(RolesFromApi) });
                if(this.state.Uid.length !== 0)
                {
                  this.setState({
                    type:'upd'
                  })
                }
                else
                {
                this.setState({
                  type:'reg'
                })
                }

                
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

     getUserById(UID){
      fetch('http://localhost:7000/admin/getusers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          i_emailid: '',
          i_userid:UID
          
        }),
     
      }).then((response) => response.json())
          .then((responseJson) => {
           console.log(responseJson.result);
           console.log(responseJson.result[0].NAME);
           console.log(responseJson.result[0].userid);
              if(responseJson.code == '200')
              {
                this.setState({
                  upd_userid: responseJson.result[0].userid,
                  upd_username: responseJson.result[0].NAME,
                  upd_useremailid: responseJson.result[0].emailid,
                  upd_usermobileno: responseJson.result[0].mobileno,
                  upd_userbussinesscode: responseJson.result[0].bussinesscode,
                  upd_userroleid: responseJson.result[0].roleid,
                  
                });
                
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
     
     
      const items ='abcdefghijklmnopqrstuvwxyz'
      var randomnumber ='';
     
       for (var i = 0; i < 5; i++)
       randomnumber += items[Math.floor(Math.random()*items.length)];
       const deviceinfo= deviceDetect();

       publicIP().then(ip => {
        console.log(ip);
       
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
          createdby:'1',
          createdip:'88'
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
           
              if(responseJson.code == '200')
              {
                ReactDOM.render((<Userdetail/>),document.getElementById("main-content"));
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
    Updatesubmit(event){ 
      event.preventDefault();
      const deviceinfo= deviceDetect();

       publicIP().then(ip => {
        console.log(ip);
       
      });

      fetch('http://localhost:7000/admin/updateuser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          userid: event.target.upduserid.value,
          username: event.target.uptusername.value,
          emailid:event.target.uptemailid.value,
          mobileno:event.target.uptmobileno.value,
          roleid:event.target.updroleid.value,
          bussinesscode:event.target.uptbussinescode.value,
          latlong:'333',
          macaddress:'sdld',
          browser:deviceinfo.browserName,
          os:deviceinfo.osName,
          source: deviceinfo.engineName,
          createdby:'1',
          createdip:'99'
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
           
              if(responseJson.code == '200')
              {
                ReactDOM.render((<Userdetail/>),document.getElementById("main-content"));
              
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
    

  
    render() {
      return (
          <VWRegisterContent register={this}/>
      )
    }
  }

  export default Register;