import React, { Component } from 'react';
import '../../assets/stylesheets/login.css';
import { deviceDetect } from 'react-device-detect';
import publicIP from 'react-native-public-ip';
import PasswordHash from 'password-hash';
import queryString from 'query-string';
import Setpasscontent from '../../view/users/setpass';

class setpass extends Component {
    constructor(props) {
          super(props);
          
          this.state = {
            ErrorMsg:'',
            code:'',
            userid:''
          };
        
         //this.btnsubmit = this.btnsubmit.bind(this);
        }
        
        componentDidMount() {
            // console.log(this.props.location.search)
             const values = queryString.parse(this.props.location.search)
             console.log(values.tk) // "top"
 
             let IPaddress='';
         
             const deviceinfo= deviceDetect();
 
             publicIP().then(ip => {
                 console.log(ip);
                 IPaddress = ip;
             });
             
            // var tokencode =PasswordHash.generate(randomnumber);
         
             
             fetch('http://localhost:7000/admin/verifytoken', {
                 method: 'POST',
                 headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
                 },
                 body:JSON.stringify({
                     emailid: '',
                     tockentype: '1',
                     tockencode: values.tk,
                     latlong:'333',
                     macaddress:'sdld',
                     browser:deviceinfo.browserName,
                     os:deviceinfo.osName,
                     source: deviceinfo.engineName,
                     createdby:'1',
                     createdip:IPaddress
                 }),
                 }).then((response) => response.json())
                 .then((responseJson) => {
                 // console.log(JSON.stringify(responseJson.result[0]));
                     if(responseJson.code === 200)
                     {
                       //  sessionStorage.setItem('userdet', JSON.stringify(responseJson.result[0]));
                         this.setState({
                             ErrorMsg: responseJson.message,
                             code:responseJson.code,
                             userid:responseJson.result[0].userid
                         });
                     }
                     else
                     {
                         this.setState({
                             ErrorMsg: responseJson.message,
                             code:responseJson.code
                         });
                     }
                     return responseJson.result;
                 })
                 .catch((error) => {
                     console.error(error);
                 });
         }
       
         btnsubmit(event) {
            let IPaddress='';
            
            // this.setState({
            //     ErrorMsg: ''
            //     });

            console.log(event.target.userid.value);

            const deviceinfo = deviceDetect();

            publicIP().then(ip => {
                console.log(ip);
                IPaddress = ip;
            });
            
            var confirmpwdhash = PasswordHash.generate(event.target.confirmpwd.value);
        
            event.preventDefault();
            fetch('http://localhost:7000/admin/changepassword', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    userid: event.target.userid.value,
                    oldpwd: '',
                    newpwd: event.target.confirmpwd.value,
                    latlong:'333',
                    macaddress:'sdld',
                    browser:deviceinfo.browserName,
                    os:deviceinfo.osName,
                    source: deviceinfo.engineName,
                    createdby:'1',
                    createdip:IPaddress
                }),
                }).then((response) => response.json())
                .then((responseJson) => {
                // console.log(JSON.stringify(responseJson.result[0]));
                    if(responseJson.code === 200)
                    {
                        this.setState({
                            ErrorMsg: responseJson.message,
                            code:responseJson.code,
                            userid:event.target.userid.value
                            });
                      //  sessionStorage.setItem('userdet', JSON.stringify(responseJson.result[0]));
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
          <Setpasscontent setpass={this} />
      )}
  }

  export default setpass;