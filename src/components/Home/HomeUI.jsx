import React, { Component } from 'react';
import Header from './../Header';
import Footer from './../Footer';

const HeaderComponent = Header.Container;

class HomeUI extends Component {

    render() {

        return (
            <div>
                <HeaderComponent />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">Hello</div>
                            <div className="col-sm">World</div>
                        </div>
                    </div>
                <Footer />

            </div>
        );
    }
}

export default HomeUI;
