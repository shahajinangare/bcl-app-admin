import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/stylesheets/app.css';

class Header extends Component {
  render() {
    return (
        <div className="App">
       <div className="logoleft"> <img src={logo} alt="Bajaj Capital Logo" width="176" height="72"/> </div>
        <header className="App-header">          
          
            <div className="headertext">Welcome to Bajaj Capital Admin Console</div>
        </header>
       
      </div>

    );
  }
}

export default Header;