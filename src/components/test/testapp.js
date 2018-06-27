import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory'
import {withRouter} from "react-router-dom";
class TestApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    };
    
}
  handleClick = () => {
    browserHistory.push('/register');
    //this.props.history.push("/register");
};
  
  render() {
    return (
      <div>
        Hi Shahaji
        <button type="submit" className="login-button" onClick={this.handleClick}  ><i className="fa fa-chevron-right"></i></button>
      </div>
    );
  }
}

export default TestApp;