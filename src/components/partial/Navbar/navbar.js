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
              <i className="fas fa-search fa-lg" />
            </div>
            <input type="text" placeholder="Search" />
          </div>
          <button id="addNoteBtn" type="button">
            <i className="fas fa-plus fa-lg" />
          </button>
          <div id="settings">
            <i className="fas fa-cog fa-lg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
