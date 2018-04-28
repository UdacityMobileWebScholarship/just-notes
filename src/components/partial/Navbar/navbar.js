import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="navContainer">
        <div id="brand">
          <span>Just Notes</span>
        </div>
        <div id="searchbar">
          <div id="searchForm">
            <div id="searchIcon">
              <i className="fa fa-search fa-lg" />
            </div>
            <input type="text" placeholder="Search" />
          </div>
          <div id="settings">
            <i className="fa fa-cog fa-lg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
