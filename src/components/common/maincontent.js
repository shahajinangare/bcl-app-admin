import React, { Component } from 'react';
import MainContent from '../../view/common/maincontent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../components/users/login';
import Register from '../../components/users/register';
import Forgotpass from '../../components/users/forgotpass';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>           
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Forgotpass' component={Forgotpass} />
          </Switch>
        </Router>
        <MainContent />

      </div>
    )
  }
}

export default MainComponent;