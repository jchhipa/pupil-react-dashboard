import React, { Component } from 'react';

class Home extends Component {

    submit() {
        this.props.history.push('/admin/reports')
    }

    render() {

        return (
            <div id="page-login">
                <div className="container">
                    <div className="logo">
                        <img src={'/assets/images/logo.svg'} alt="Pupil" />
                    </div>

                    <div className="login-box">
                        <form className="pupil-form" onSubmit={this.submit.bind(this)}>
                            <div className="fieldset">
                                <label htmlFor="username">User Name</label>
                                <div className="form-group inner-addon left-addon">
                                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                                    <span className="icon-envelope"></span>
                                </div>
                            </div>
                            <div className="fieldset">
                                <label htmlFor="password">Password</label>
                                <div className="form-group inner-addon left-addon">
                                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                                    <span className="icon-lock"></span>
                                </div>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn btn--glossy">SIGN IN</button>
                                <a className="link-forgot">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
