import React, {Component} from 'react';

class Sidebar extends Component {

  render() {

    return (
      <div className="orders-sidebar sidebar-main  pl-5 pr-5">
        <div className="header flex space-between valign-center">
          <h3>12a Park Road, London</h3>
          <div className="edit">
            <button className="btn btn--gray btn--small btn--icon btn--no-shadow"><span className="icon-pen"></span> Edit</button>
          </div>
        </div>

        <p className="mt-2">
          <span className="tag tag--big warning">Scheduled</span>
        </p>

        <div className="mt-5">
          <div className="sidebar-info-block row">
            <div className="left flex col-sm">
              <span className="icon-calendar"></span>
              <div className="sidebar-info-block-desc">
                <h6>Date Ordered</h6>
                <h5>7th June 2017</h5>
              </div>
            </div>
            <div className="right flex col-sm">
              <span className="icon-calendar"></span>
              <div className="sidebar-info-block-desc">
                <h6>Payment Process on</h6>
                <h5>7th June 2017</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="sidebar-info-block row">
            <div className="left flex col-sm">
              <span className="icon-credit-card"></span>
              <div className="sidebar-info-block-desc">
                <h6>Provisional Capture Fee</h6>
                <h5>&pound; 259</h5>
              </div>
            </div>
            <div className="right flex col-sm">
              <span className="icon-pin"></span>
              <div className="sidebar-info-block-desc">
                <h6>Key Pickup Point</h6>
                <h5>Property</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <form className="pupil-form">
            <div className="fieldset">
                <label htmlFor="notes" className="color-base">Pickup Notes</label>
                <div className="form-group">
                    <textarea type="password" className="form-control" id="password" placeholder="Notes / Comments" required></textarea>
                </div>
            </div>
          </form>
        </div>

        <div className="mt-5">
          <div className="header">
            <h3>Other Information</h3>
          </div>
        </div>

        <div className="mt-3">
          <div className="sidebar-info-block row">
            <div className="left flex col-sm">
              <span className="icon-calendar"></span>
              <div className="sidebar-info-block-desc">
                <h6>Usage</h6>
                <h5>Residential</h5>
              </div>
            </div>
            <div className="right flex col-sm">
              <span className="icon-flag"></span>
              <div className="sidebar-info-block-desc">
                <h6>Type</h6>
                <h5>Flat Apartment</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="sidebar-info-block row">
            <div className="left flex col-sm">
              <span className="icon-bed"></span>
              <div className="sidebar-info-block-desc">
                <h6>Bedrooms</h6>
                <h5>4</h5>
              </div>
            </div>
            <div className="right flex col-sm">
              <span className="icon-property-area"></span>
              <div className="sidebar-info-block-desc">
                <h6>Estimated Size</h6>
                <h5>4000 sq/ft</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="sidebar-info-block row">
            <div className="left flex col-sm">
              <span className="icon-tag"></span>
              <div className="sidebar-info-block-desc">
                <h6>Transaction Type</h6>
                <h5>Sale</h5>
              </div>
            </div>
            <div className="right flex col-sm">
              <span className="icon-credit-card"></span>
              <div className="sidebar-info-block-desc">
                <h6>Price</h6>
                <h5>&pound;5,999.000</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <form className="pupil-form">
            <div className="fieldset">
                <label htmlFor="notes" className="color-base">Address</label>
                <div className="form-group">
                    <textarea type="password" className="form-control" id="password" placeholder="12a Park Road, London" required></textarea>
                </div>
            </div>
          </form>
        </div>

        <div className="mt-5">
          <button className="btn btn--danger-dark">Cancel Order</button>
        </div>

      </div>
    );
  }
}

export default Sidebar;