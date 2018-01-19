import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        return (
            <div id="page-login">
                <div className="container">
                    <div className="logo">
                        <img src={'/assets/images/logo.png'} alt="Pupil" />
                    </div>

                    <div className="login-box">
                        <form>
                            <div className="fieldset">
                                <label htmlFor="username">Email</label>
                                <div className="form-group inner-addon left-addon">
                                    <span className="icon-mail"></span>
                                    <input type="text" className="form-control" id="username"  />
                                </div>
                            </div>
                            <div className="fieldset">
                                <label htmlFor="password">Password</label>
                                <div className="form-group inner-addon left-addon">
                                    <span className="icon-lock"></span>
                                    <input type="password" className="form-control" id="password"  />
                                </div>
                            </div>
                            <div className="form-actions">
                                <Link to="home"><button className="btn btn--glossy">dfgf</button></Link>
                                <a href="/" className="text-center">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
