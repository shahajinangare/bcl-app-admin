import React, { Component } from 'react';
import VWForgetpassord from '../../view/users/forgotpass';
import '../../assets/stylesheets/login.css';
import ReactDOM from 'react-dom';
import Login from '../../components/users/login';
import { deviceDetect } from 'react-device-detect';
import publicIP from 'react-native-public-ip';
import PasswordHash from 'password-hash';
import queryString from 'query-string'

class Forgetpassord extends Component {
    constructor(props) {
            super(props);
          
          this.state = {
          ErrorMsg:''
          };
        
          this.btnsubmit = this.btnsubmit.bind(this);
        }
        
        componentDidMount() {
           // console.log(this.props.location.search)
            const values = queryString.parse(this.props.location.search)
            console.log(values.tk) // "top"
       
        }
        
        navigateToPage = () => {
          this.context.router.push('/home')
        };
      
        btnsubmit(event) {
            let IPaddress='';
        
            const items ='abcdefghijklmnopqrstuvwxyz'
            var randomnumber ='';
            
            for (var i = 0; i < 5; i++)
            randomnumber += items[Math.floor(Math.random()*items.length)];

            const deviceinfo= deviceDetect();

            publicIP().then(ip => {
                console.log(ip);
                IPaddress = ip;
            });
            
            var tokencode =PasswordHash.generate(randomnumber);
        
            event.preventDefault();
            fetch('http://localhost:7000/admin/generatetoken', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    emailid: event.target.email_id.value,
                    tockentype: '1',
                    tockencode: tokencode,
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
          <VWForgetpassord forgetpass={this} />
      )}
  }

  export default Forgetpassord;