import React, { Component } from 'react';
import MainContent from '../../view/common/maincontent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../components/users/login';
import Register from '../../components/users/register';
import Forgotpass from '../../components/users/forgotpass';
<<<<<<< HEAD
import { Redirect } from 'react-router'
=======
import HomeComponent from '../../components/common/home';

>>>>>>> ef244cbc96398ed5aae5cceb2b21002c3b84ac15
class MainComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>           
            <Route exact path='/login' component={Login}  />
            <Route exact path='/register' component={Register}  />
            <Route exact path='/forgotpass' component={Forgotpass} />
<<<<<<< HEAD
            {/* <Redirect to="/register" /> */}
=======
            <Route exact path='/home' component={HomeComponent} />
           
>>>>>>> ef244cbc96398ed5aae5cceb2b21002c3b84ac15
          </Switch>
        </Router>
        <MainContent />

      </div>
    )
  }
}

export default MainComponent;