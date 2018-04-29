import React, { PureComponent, Fragment } from "react";
import Navbar from "../../components/partial/Navbar/navbar.js";
import LeftMenu from "../../components/partial/LeftMenu/leftMenu";
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
        <div className="pageContainer">
          <div id="leftContainer">
            <LeftMenu />
          </div>
          <div id="rightContainer">
            <div id="notesCardContainer">
              <ul>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
