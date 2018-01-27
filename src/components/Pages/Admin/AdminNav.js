import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import FadeAndSlide from '../../Animations/FadeAndSlide';

class AdminNav extends Component {

    showWeatherButton() {
        return (
            <li  className="pull-right">
                <FadeAndSlide
                    startX={'20px'}
                    startY={'30px'}
                    delay={50}
                    duration={100}
                >
                <span style={{pointerEvents: 'none'}} className="btn btn--dark btn--icon">
                    <span className="icon-sunny"></span>
                    <a>Sunny Today</a>  
                </span>    
                </FadeAndSlide>          
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