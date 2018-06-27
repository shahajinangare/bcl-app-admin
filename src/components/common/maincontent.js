import React, { Component } from 'react';
import MainContent from '../../view/common/maincontent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../components/users/login';
import Register from '../../components/users/register';
import Forgotpass from '../../components/users/forgotpass';
import UserList from '../../components/users/userlist';
import Testapp from '../test/testapp';
import {browserHistory} from 'react-router';


import { Redirect } from 'react-router'
class MainComponent extends Component {
  render() {
    return (
      <div>
        <Router >
          <Switch history={browserHistory} >           
            <Route exact path='/login' component={Login}  />
            <Route exact path='/register' component={Register}  />
            <Route exact path='/forgotpass' component={Forgotpass} />
            <Route exact path='/users' component={UserList} />
            {/* <Redirect to="/register" /> */}
          </Switch>
       
        </Router>
        <MainContent />
<Testapp />
      </div>
    )
  }
}

export default MainComponent;