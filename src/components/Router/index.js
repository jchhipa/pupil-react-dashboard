import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'

import Home from './../Home/';

const HomeContainer = Home.Container;

class Router extends Component {
  render() {
    return (
    <main>
      <Switch>
        <Route exact path='/' component={HomeContainer}/>
      </Switch>
    </main>
    )
  }
}

export default Router