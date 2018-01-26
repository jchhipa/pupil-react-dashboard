import React, { Component } from 'react';
import FadeAndSlide from '../../Animations/FadeAndSlide';

class Lettings extends Component {

    render() {

        return (
            <div id="page-lettings">
                <div className="container">
                    <FadeAndSlide
                        startX={'-50px'}
                        startY={'0px'}
                        delay={100}
                        duration={100}
                    >
                        <h1 className="page-title">Lettings</h1>
                    </FadeAndSlide>

                </div>
            </div>
        );
    }
}

export default Lettings;
