import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'

export default class Root extends Component {

    render() {
        return (
            <Router>
                <App />
            </Router>
        );
    }
}
