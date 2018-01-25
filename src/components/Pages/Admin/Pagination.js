import React, { Component } from 'react';
import PaginationComponent from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import PropTypes from 'prop-types';

class Pagination extends Component {

    constructor(props) {

      super(props);

      this.state = {
        current: 3,
      };
    }

    onChange = (page) => {
      this.setState({
        current: page,
      });
    }

    render() {

        return (
            <div className="rc-pagination">
                <PaginationComponent onChange={this.onChange} current={this.state.current} total={50} />
            </div>
        );
    }
}


export default Pagination;
