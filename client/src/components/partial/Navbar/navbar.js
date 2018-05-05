import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {
    searchVisible: false,
    searchQuery: ""
  };

  isMobile = () => {
    const width = window.innerWidth;
    return width < 992;
  };

  toggleForm = () => {
    if (this.isMobile()) {
      if (this.state.searchQuery) {
        this.setState({ searchVisible: true });
      } else {
        this.setState({ searchVisible: false });
      }
    } else {
      this.setState({ searchVisible: true });
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

  onChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  componentWillMount() {
    this.toggleForm();
  }

  componentDidMount() {
    window.addEventListener("resize", this.toggleForm);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.toggleForm);
  }

  render() {
    return (
      <nav id="navContainer">
        <div id="brand">
          <span>Just Notes</span>
        </div>
        <div id="searchbar">
          <div id="searchForm">
            <div id="searchIcon" onClick={this.onSearchButtonClick}>
              <i className="fas fa-search fa-lg" />
            </div>
            {this.state.searchVisible ? (
              <div id="searchField">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={this.onChange.bind(this)}
                  value={this.state.searchQuery}
                />
              </div>
            ) : null}
          </div>
          <button id="addNoteBtn" type="button">
            <i className="fas fa-plus fa-lg" />
          </button>
          <div id="settings">
            <i className="fas fa-cog fa-lg" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
