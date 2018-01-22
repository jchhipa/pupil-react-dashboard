import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class AdminNav extends Component {

    showWeatherButton() {
        return (
            <li style={{pointerEvents: 'none'}} className="pull-right btn btn--dark btn--icon">
                <span className="icon-sunny"></span>
                <a>Sunny Today</a>                
            </li>
        )
    }

    render() {

        return (
            <div className="container">
                <div className="admin-header">
                    <nav>
                        <ul className="clearfix">
                            <li><NavLink to="/admin/orders">ORDER</NavLink></li>
                            <li><NavLink to="/admin/properties">PROPERTIES</NavLink></li>
                            <li><NavLink to="/admin/reports">REPORTS</NavLink></li>
                            { this.props.showWeather ? this.showWeatherButton() : null }
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default AdminNav;