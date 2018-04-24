import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const noteSamples = [
  { title: "Simple", text: "Hello", timeStamp: "18 April 2018" },
  { title: "Somethings", text: "comming more.." },
  { title: "Comming up next", text: "in about .." },
  { title: "Wait a min", text: "for something special" },
  { title: "surprise", text: "something is here" }
];
const NoteShell = ({ active, title, text, timeStamp = "18 April 2018" }) => (
  <div className="col-3">
    <div className={`note-shell${active ? " active" : ""}`}>
      <div className="shell-header">
        {["share-square-o", "download", "trash-o"].map(a => (
          <button
            key={`shell-${a}`}
            type="button"
            className="btn btn-link btn-sm px-1"
          >
            <i className={`fa fa-${a}`} />
          </button>
        ))}
        <span className="text-muted ml-auto">{timeStamp}</span>
      </div>
      <div className="shell-body">
        <h4 className="shell-title">{title}</h4>
        <span className="font-weight-light text-muted">{text}</span>
      </div>
    </div>
  </div>
);

class Home extends PureComponent {
  static displayName = "Home";

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand navbar-light">
          <div className="col-2 text-center">
            <a href="/" className="navbar-brand">
              Just Notes
            </a>
          </div>
          <form className="search-field col">
            <input type="text" className="form-control" placeholder="Search" />
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
        <div className="container-fluid page-home">
          <div className="row secs">
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
            <div className="col sec sec-right">
              <div className="row notepad">
                <div className="col my-4">
                  <div className="toolbar">
                    {["bold", "italic", "underline", "strikethrough"].map(a => (
                      <button
                        key={`tool-${a}`}
                        type="button"
                        className="btn btn-light"
                      >
                        <i className={`fa fa-${a} fa-fw`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="col p-4 text-right">
                  <button type="button" className="btn btn-link">
                    Delete Note
                  </button>
                  <button type="button" className="btn btn-snow text-uppercase">
                    AutoSave Enabled
                  </button>
                </div>
                <div className="col-12">
                  <div className="pad">
                    <input
                      type="text"
                      className="note-title"
                      placeholder="Add a title"
                    />
                    <textarea placeholder="its empty here. Let's write something..." />
                  </div>
                </div>
              </div>
              <div className="row notes">
                {noteSamples.map((a, i) => (
                  <NoteShell key={`n-${i}`} active={i === 0} {...a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
