import React from 'react';
import '../../assets/stylesheets/menu.css';
import MenuContent from '../../view/common/adminmenu';


class adminmenu extends React.Component {
    data = [];

    constructor(props) {
        super(props);
         
                this.state = {           
        };

        this.logoutsubmit = this.logoutsubmit.bind(this);
    }

    logoutsubmit() {
        sessionStorage.clear();
        // ReactDOM.render((<MainContent />), document.getElementById("main-content"));
      Response.redirect('/login');
    }

    getmenubyrole() {           
        fetch('http://localhost:7000/admin/getmenubyrole', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                roleid: 1,
                parentcode: 1,
                loginuserid: 1
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    ErrorMsg: responseJson.message
                });
      
                responseJson.result.forEach(element => {                   
                    
                    console.log(element);
                   
                });
               // return responseJson.result;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        //  alert(sessionStorage.getItem('userdet'));
        if (sessionStorage.getItem('userdet') != null) {

            return (
              <MenuContent menuaccess={this}/>
            )
        }
        else { return null; }

//Nilesh
        sessionStorage.setItem('menuloaded', 'Y');
    }
   

}

export default adminmenu;