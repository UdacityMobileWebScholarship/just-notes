import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class LeftMenu extends PureComponent {
  render() {
    return (
      <div className="col-2 sec sec-left">
        <nav className="nav flex-column pt-4 lst">
          <Link to="/" className="nav-link active">
            My Notes <span className="note-badge">15</span>
          </Link>
          <Link to="/keys" className="nav-link">
            Hot Keys
          </Link>
        </nav>
        <nav className="d-flex">
          {["facebook", "linkedin", "twitter"].map(a => (
            <button
              key={`share-btn-${a}`}
              type="button"
              className="btn btn-link btn-share"
            >
              <i className={`fa fa-${a} fa-fw`} />
            </button>
          ))}
        </nav>
      </div>
    );
  }
}
