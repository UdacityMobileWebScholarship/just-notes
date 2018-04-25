import React, { PureComponent } from "react";
import "./navbar.css";
export default class Navbar extends PureComponent {
  constructor() {
    super();
    this.state = { searchResults: null, inputVal: "" };
    this.search = this.search.bind(this);
    this.cls = this.cls.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  dummyList = ["Krypton", "The Flash", "Suits", 'Blindspot', 'The Royals', 'Silicon Valley', 'Deception'];
  search(q) {
    // TODO: replace dummy search with real search in notes
    q = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const Q = new RegExp(q, "i");
    const results = this.dummyList.filter(a => Q.test(a)).map(text => ({
      text,
      html: text.replace(Q, w => `<span class="s-match">${w}</span>`)
    }));
    if (results) {
      this.setState({
        searchResults: results.map(({ text, html: __html }, i) => (
          <li key={`res-${i}`} className="result">
            <span
              className="ml-2 result-title"
              dangerouslySetInnerHTML={{ __html }}
            />
          </li>
        ))
      });
    }
  }
  cls() {
    this.setState({ searchResults: null, inputVal: "" });
    document.querySelector('.search-field .form-control').value = '';
  }
  keyUp({ keyCode, key, target: { value } }) {
    if (value === "" || keyCode === 27) {
      /* clear on esc */
      this.cls();
    } else {
      this.search(value);
    }
  }
  handleChange({ target: { value } }) {
    this.setState({ inputVal: value });
  }
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light">
        <div className="col-2 text-center">
          <a href="/" className="navbar-brand">
            Just Notes
          </a>
        </div>
        <form className="search-field col">
          <input
            type="text"
            onKeyUp={this.keyUp}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Search"
          />
          <i className="cls" onClick={this.cls}>&times;</i>
          {this.state.searchResults && (
            <ul className="results">{this.state.searchResults}</ul>
          )}
        </form>
        <div
          className="navbar-nav col-1"
          style={{ padding: "10px 0", backgroundColor: "#fff" }}
        >
          <button
            type="button"
            className="btn btn-link"
            style={{ backgroundColor: "#fff" }}
          >
            <i className="fa fa-cog fa-lg fa-fw" />
          </button>
        </div>
      </nav>
    );
  }
}
