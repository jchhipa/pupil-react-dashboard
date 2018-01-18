import React, { Component } from 'react';
import Header from './../Header';
import Router from './../Router';
const HeaderComponent = Header.Container;

class AppUI extends Component {
   

    render() {
        return (
            <div className='app'>
                <HeaderComponent />
                <Router />
            </div>
        );
    }
}

export default AppUI;
