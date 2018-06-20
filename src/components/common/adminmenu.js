import React, { Component } from 'react';
import '../../assets/stylesheets/menu.css';
import ReactDOM from 'react-dom';
import MainContent from '../../view/common/maincontent';
class adminmenu extends Component {
    constructor(props) {
        super(props);
         
                this.state = {           
        };

        this.logoutsubmit = this.logoutsubmit.bind(this);
    }
    logoutsubmit(event) {
        // alert('forgot pass');
           ReactDOM.render((<MainContent />), document.getElementById("main-content"));  
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

    getmenuhtml() {
       
        return (
 
            <div id='cssmenu'>
                 <ul>
                     <li><a href='#'><span>Home</span></a></li>
                     <li className='active has-sub'><a href='#'><span>Products</span></a>
                         <ul>
                             <li className='has-sub'><a href='#'><span>Product 1</span></a>
                                 <ul>
                                     <li><a href='#'><span>Sub Product</span></a></li>
                                     <li className='last'><a href='#'><span>Sub Product</span></a></li>
                                 </ul>
                             </li>
                             <li className='has-sub'><a href='#'><span>Product 2</span></a>
                                 <ul>
                                     <li><a href='#'><span>Sub Product</span></a></li>
                                     <li className='last'><a href='#'><span>Sub Product</span></a></li>
                                 </ul>
                             </li>
                         </ul>
                     </li>
                     <li><a href='#'><span>About</span></a></li>
                     <li className='last'><a href='#'><span>Contact</span></a></li> 
                     <li className='last'><a href='#' onClick={this.logoutsubmit} ><span>Log Out</span></a></li>
                 </ul>
             </div>
            
        )
    }
    render() {
      return(
      this.getmenuhtml()
    );
}
}

export default adminmenu;