import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./leftMenu.css";

class LeftMenu extends Component {
  render() {
    return (
      <div id="leftPanelContainer">
        <div id="linkContainer">
          <Link to="/" className="link active">
            <span className="linkText">My notes</span>
            <span className="linkBadge">15</span>
          </Link>
          <Link to="/keys" className="link">
            <span className="linkText">Hot Keys</span>
          </Link>
        </div>
        <div id="sharing">
          {["facebook", "linkedin", "twitter"].map(a => (
            <button key={`share-btn-${a}`} type="button" className="shareBtn">
              <i className={`fa fa-${a} fa-fw`} />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default LeftMenu;
