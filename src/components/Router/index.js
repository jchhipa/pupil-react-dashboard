import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import { Redirect } from 'react-router'

import Admin from './../Pages/Admin/';
import Settings from './../Pages/Settings/';
import Sales from './../Pages/Sales/';
import Login from './../Pages/Login/';

class Router extends Component {
  render() {
    return (
    <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/admin' render={() => (
            <Redirect to="/admin/reports"/>
        )} />
     
        <Route exact path='/sales' component={Sales}/>
        <Route exact path='/settings' component={Settings}/>
      </Switch>
    </main>
    )
  }
}

export default Router