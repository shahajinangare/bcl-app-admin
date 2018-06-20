import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/stylesheets/app.css';

class Header extends Component {
    render() {
      return (
        <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />  */}
          <h1 className="App-title">Welcome to Bajaj Capital</h1>
        </header>
      </div>
      );
    }
  }
  
  export default Header;