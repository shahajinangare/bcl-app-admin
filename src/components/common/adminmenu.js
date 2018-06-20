import React, { Component } from 'react';
import '../../assets/stylesheets/menu.css';

class adminmenu extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            menudata: ''
        };
    }

    getmenubyrole() {
        // alert(this.state.showModal);
        if (this.state.showModal == false) {
            this.state = { showModal: true };
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
                    //  console.log(responseJson);
                    this.setState({
                        ErrorMsg: responseJson.message
                    });

                    // responseJson.result.forEach(element => {
                    //     //console.log(element);                    
                    // });
                    this.getmenuhtml(responseJson.result);
                })
                .catch((error) => {
                    console.error(error);
                });

            this.state.menudata = this.getmenuhtml();
            return this.state.menudata;
        }
        else
            return this.state.menudata;
    }

    getmenuhtml(data) {
         console.log(data[1].id);

        //  data.forEach(element => {
        //     console.log(element.id);              
        //  });


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
                </ul>
            </div>          
        
    )
    }
    render() {
        return (

            this.getmenubyrole()

        );
    }
}

export default adminmenu;