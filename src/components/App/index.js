import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'
import Header from './../Header';

import Reports from './../Pages/Admin/Reports';
import Orders from './../Pages/Admin/Orders';
import Properties from './../Pages/Admin/Properties';
import Lettings from './../Pages/Lettings/';
import Sales from './../Pages/Sales/';
import Login from './../Pages/Login/';

const DashboardLayout = ({children, ...rest}) => {
    return (
      <div className="page page-dashboard">
        <Header />
        <div className="main">{children}</div>
      </div>
    )
}
  
const LoginLayout = ({children, ...rest}) => {
    return (
      <div className="page page-login">
        <div className="main">{children}</div>
      </div>
    )
}


/*
  Route wrapper
 */

const DashboardRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <DashboardLayout>
            <Component {...matchProps} />
        </DashboardLayout>
      )} />
    )
};
  
const LoginLayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <LoginLayout>
            <Component {...matchProps} />
        </LoginLayout>
      )} />
    )
};
  
class App extends Component {

    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
                        <Route exact path="/admin">
                            <Redirect to="/admin/reports" />
                        </Route>
                        <LoginLayoutRoute path="/login" component={Login} />
                        <DashboardRoute path="/admin/reports" component={Reports} />
                        <DashboardRoute path="/admin/orders" component={Orders} />
                        <DashboardRoute path="/admin/properties" component={Properties} />
                        <DashboardRoute path="/sales" component={Sales} />
                        <DashboardRoute path="/lettings" component={Lettings} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
