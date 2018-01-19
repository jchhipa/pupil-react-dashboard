import React, { Component } from 'react';
import Header from './../Header';
import Footer from './../Footer';

class Home extends Component {

    render() {

        return (
            <div>
                <Header />
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

export default Home;
