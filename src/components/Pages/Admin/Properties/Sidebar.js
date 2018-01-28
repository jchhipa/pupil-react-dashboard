import React, {Component} from 'react';

class Sidebar extends Component {

  render() {

    return (
      <div className="orders-sidebar sidebar-main">
        <div className="header  pl-5 pr-5">
          <h3>239 Eastdown Park Road</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam obcaecati facere, quis voluptates autem alias nesciunt porro nemo ratione?
          </p>
        </div>

        <div className="mt-2">
          <div className=" pl-5 pr-5">
            <button className="btn btn--glossy btn--full-width">DOWNLOAD PACK (77.2 MB)</button>
          </div>
        </div>

        <div className="mt-4 mb-5 pl-5 pr-5">
          <div className="header">
            <h3>Download 360 Images</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam obcaecati facere, quis voluptates autem alias nesciunt porro nemo ratione?
            </p>
          </div>
        </div>



        <div className="mt-4  pl-5 pr-5">
          <div className="thumbnail-wrap">
            <p className="color-base">EXTERIOR 1</p>
            <div className="thumbnail-image thumbnail-image--big" style={{backgroundImage: `url(/assets/images/property14.png)`}} />
            <div className="download">
              <div className="fa fa-download"></div>
              <div>22.6</div>
              <div>MB</div>
            </div>
          </div>
        </div>

      
        <div className="mt-2  pl-5 pr-5">
          <div className="thumbnail-wrap">
            <p className="color-base">KITCHEN</p>
            <div className="thumbnail-image thumbnail-image--big" style={{backgroundImage: `url(/assets/images/property6.png)`}} />
            </div>
        </div>  

        <p className="mt-5 mb-3"></p>

      </div>
    );
  }
}

export default Sidebar;