import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/stylesheets/app.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            <img src={logo} alt="logo" />}
       
        </header>
      </div>
    );
  }
}

export default Header;