import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'

import Home from './../Pages/Home/';
import Login from './../Pages/Login/';

class Router extends Component {
  render() {
    return (
    <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Home}/>
      </Switch>
    </main>
    )
  }
}

export default Router