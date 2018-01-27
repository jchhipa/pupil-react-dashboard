import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropertyListItem extends Component {

    render() {

      const color = this.props.status === 'Offline' ? 'gray' : 'danger';
        return (
            <div className="property-list-item box">
                <div className="left flex">
                  <div className="photo">
                      <div className="thumbnail-image" style={{backgroundImage: `url(${this.props.imgSrc})`}} />
                  </div>
                  <div className="desc">
                      <h6 className="property-title">{this.props.title}</h6>
                      <div className="property-subtitle">{this.props.subtitle}</div>
                  </div>
                </div>
                <div className="middle">
                  <div className="status">
                      <span className="property-status">
                          <span className={`tag ${color}`}>{this.props.status}</span>
                      </span>
                  </div>
                </div>
                <div className="right flex">
                  <div className="download-media">
                      <span className="download">
                          <button className="btn btn--secondary btn--icon btn--no-shadow"><span className="fa fa-download"></span> Download</button>
                      </span>
                  </div>
                  <div className="edit" >
                      <a onClick={this.props.onEdit}><span className="icon-pen">
                      </span></a>
                  </div>
                </div>
            </div>                       
        );
    }
}


PropertyListItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  status: PropTypes.string
}

PropertyListItem.defaultProps = {
  status: 'Live',
};

export default PropertyListItem;
