import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {
    searchVisible: false
  };

  isMobile = () => {
    const width = window.innerWidth;

    if (width >= 992) {
      this.setState({ searchVisible: true });
      return false;
    } else {
      this.setState({ searchVisible: false });
      return true;
    }
  };

  onSearchButtonClick = event => {
    if (this.isMobile()) {
      if (this.state.searchVisible) {
        this.setState({ searchVisible: false });
      } else {
        this.setState({ searchVisible: true });
      }
    } else {
      event.preventDefault();
    }
  };

  componentWillMount() {
    this.isMobile();
  }

  componentDidMount() {
    window.addEventListener("resize", this.isMobile);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.isMobile);
  }

  render() {
    return (
      <div id="navContainer">
        <div id="brand">
          <span>Just Notes</span>
        </div>
        <div id="searchbar">
          <div id="searchForm">
            <div id="searchIcon" onClick={this.onSearchButtonClick}>
              <i className="fas fa-search fa-lg" />
            </div>
            {this.state.searchVisible ? (
              <input type="text" placeholder="Search" />
            ) : null}
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
