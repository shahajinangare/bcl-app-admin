import React, { Component } from 'react';
import '../../assets/stylesheets/login.css';
import Home from '../../view/common/home';
import ReactDOM from 'react-dom';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
          
          this.state = {
         // ErrorMsg:''
          };
        
        }
        componentDidMount() {
    
        }

 render() {
      return (
          <Home home={this}/>
      )
    }
  }

  export default HomeComponent;