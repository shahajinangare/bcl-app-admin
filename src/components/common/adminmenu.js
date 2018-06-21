import React, { Component } from 'react';
import '../../assets/stylesheets/menu.css';
import ReactDOM from 'react-dom';
import MainContent from '../../view/common/maincontent';
import MenuContent from '../../view/common/adminmenu';


class adminmenu extends React.Component {
    data = [];

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
        this.logoutsubmit = this.logoutsubmit.bind(this);
        //this.getmenubyrole = this.getmenubyrole.bind(this);
    }

    logoutsubmit(event) {
        ReactDOM.render((<MainContent />), document.getElementById("main-content"));
    }

    componentDidMount() {
        //   alert('componentDidMount');
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
                //  console.log(responseJson.result);
                this.setState({
                    data: responseJson.result
                });
                // console.log(this.state.data);
                // responseJson.result.forEach(element => {
                //    // console.log(element);
                // });
                // return responseJson.result;
            })
            .catch((error) => {
                console.error(error);
            });
    }




    render() {
        console.log('render data');
        console.log(this.state.data);

        return (

            <div id="menu-root">
                <div id='cssmenu'>
                    <ul>
                        <li><a href='#'><span>Home</span></a></li>


                        {this.state.data.map(itemmain => {

                            if (itemmain.parentid == -1) {
                                return <li className='has-sub' id={itemmain.id}>
                                    <a href='#'><span>{itemmain.menuname}</span></a>
                                    <ul>
                                        {this.state.data.map(subitem => {
                                            if (subitem.parentid == itemmain.id && subitem.parentid != -1) {
                                                return <li><a href={subitem.URL} id={subitem.id} ><span>{subitem.menuname}</span></a></li>
                                            }
                                        })}
                                    </ul>
                                </li>

                            }
                        }
                        )}
                   <li><a href='#'><span>Log Out</span></a></li>

                    </ul>
                </div>
            </div>
            // <MenuContent login={this}/>
        )
    }
}

export default adminmenu;