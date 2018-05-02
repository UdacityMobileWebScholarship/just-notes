import React, { PureComponent, Fragment } from "react";
import Navbar from "./navbar.jsx";
import LeftMenu from "./left-menu.jsx";
import NotePad from "./note-pad.jsx";
import "./Home.css";

const noteSamples = [
  { title: "List", text: "<li>Helli</li><li>Hola</li>" },
  { title: "Simple", text: "Hello", timeStamp: "18 April 2018" },
  { title: "Somethings", text: "coming more.." },
  { title: "Coming up next", text: "in about .." },
  { title: "Wait a min", text: "for something special" },
  { title: "surprise", text: "something is here" }
];
const NoteShell = ({
  active,
  title,
  text: __html,
  timeStamp = "18 April 2018",
  onClick
}) => (
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
        <span className="text-muted ml-auto stamp">{timeStamp}</span>
      </div>
      <div className="shell-body" onClick={onClick}>
        <h4 className="shell-title">{title}</h4>
        <span
          className="font-weight-light text-muted"
          dangerouslySetInnerHTML={{ __html }}
        />
      </div>
    </div>
  </div>
);

class Home extends PureComponent {
  static displayName = "Home";
  state = {
    showPad: false,
    pad: { title: "", text: "" }
  };
  updatePad = pad => {
    this.setState({ pad });
  };
  shellToPad = ({ target, currentTarget: shell }) => {
    const title = shell.querySelector(".shell-title").textContent;
    const text = shell.querySelector(".shell-body .text-muted").textContent;
    this.setState({ showPad: true, pad: { title, text } });
    const _el = document.querySelector(".note-shell.active");
    if (_el) {
      _el.classList.remove("active");
    }
    shell.parentElement.classList.add("active");
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container-fluid page-home">
          <div className="row secs">
            <LeftMenu />
            <div className="col sec sec-right pt-4 px-5">
              {!this.state.showPad ? (
                <div className="row">
                  <div className="col-12 text-right">
                    <button type="button" className="btn btn-in-theme">
                      <i className="fa fa-plus" /> CREATE NEW
                    </button>
                  </div>
                </div>
              ) : (
                <NotePad {...this.state.pad} updatePad={this.updatePad} />
              )}
              <div className="row notes mt-2">
                {noteSamples.map((a, i) => (
                  <NoteShell key={`n-${i}`} {...a} onClick={this.shellToPad} />
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
