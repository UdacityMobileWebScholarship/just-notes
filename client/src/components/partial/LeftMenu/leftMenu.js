import React, { Component } from "react";
import "./leftMenu.css";

class LeftMenu extends Component {
  view = (e) => {
    e.preventDefault();
    const {currentTarget} = e;
    document.querySelector('.link.active').classList.remove('active');
    currentTarget.classList.add('active');
    this.props.setView(currentTarget.href.split('#')[1] === 'cards');
  }
  render() {
    return (
      <div id="leftPanelContainer">
        <div id="linkContainer">
          <a href="#cards" className="link active" onClick={this.view}>
            <span className="linkText">My notes</span>
            <span className="linkBadge">15</span>
          </a>
          <a href="#hotkeys" className="link" onClick={this.view}>
            <span className="linkText">Hot Keys</span>
          </a>
        </div>
        <div id="sharing">
          {["facebook-f", "linkedin-in", "twitter"].map(a => (
            <button key={`share-btn-${a}`} type="button" className="shareBtn">
              <i className={`fab fa-${a} fa-fw`} />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default LeftMenu;
