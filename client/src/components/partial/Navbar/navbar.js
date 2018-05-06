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

  onSearchClear = () => {
    this.setState({ searchQuery: "" });
    this.refs.searchField.focus();
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
    window.removeEventListener("resize", this.toggleForm);
  }

  render() {
    return (
      <nav id="navContainer">
        <div id="brand">
        <a href="/">
          <span>Just Notes</span>
        </a>
        </div>
        <div id="searchbar">
          <div id="searchForm">
            <div
              id="searchIcon"
              onClick={this.onSearchButtonClick}
              className={this.state.searchVisible ? "searchActive" : null}
            >
              <i className="fas fa-search fa-lg" />
            </div>
            {this.state.searchVisible ? (
              <div id="searchField" className="underline">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={this.onChange.bind(this)}
                  value={this.state.searchQuery}
                  autoFocus={!!this.isMobile()}
                  ref="searchField"
                />
                {this.state.searchQuery ? (
                  <div id="closeBtn" onClick={this.onSearchClear}>
                    <i className="fas fa-times fa-lg" />
                  </div>
                ) : null}
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
