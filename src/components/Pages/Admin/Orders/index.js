import React, {Component} from 'react';
import AdminNav from './../AdminNav';
import Pagination from './../Pagination';
import PropertyFilter from './../PropertyFilter';
import Listings from './Listings';
import FadeAndSlide from '../../../Animations/FadeAndSlide';
import SliderPopup from './../../../SliderPopup';

import './Orders.css';

class Orders extends Component {

		constructor(props) {
				super(props);
				this.state = {
						sliderPopup: false
				}
		}
		renderSliderPopup() {
				return (
						<SliderPopup>
								<button
										id='close-popup'
										className='btn btn--no-shadow'
										onClick={this
										.closePopup
										.bind(this)}>
										<i className="fa fa-close"></i>
								</button>

								<h2>Slider goes here</h2>
						</SliderPopup>
				)
		}

		closePopup() {
				this.setState({sliderPopup: false})
		}


		onListingClick() {
			this.setState({sliderPopup: true})
		}

		render() {

				return (
						<div id="page-orders">

								{this.state.sliderPopup
										? this.renderSliderPopup()
										: <div/>}

								<AdminNav/>

								<div className="container">
										<div className="flex space-between">
												<FadeAndSlide startX={'-50px'} startY={'0px'} delay={100} duration={100}>
														<h1 className="page-title">Orders</h1>
												</FadeAndSlide>
												<div className="create-order">
														<FadeAndSlide startX={'50px'} startY={'0px'} delay={150} duration={100}>
																<button type="submit" className="btn btn--glossy">CREATE ORDER</button>
														</FadeAndSlide>
												</div>
										</div>
								</div>

								<PropertyFilter/>
								<Listings listingClick={this
										.onListingClick
										.bind(this)}/>
								<Pagination/>
						</div>
				);
		}
}

export default Orders;
