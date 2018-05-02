import React, { Component } from "react";
import "./note-pad.css";
const Toolbar = () => (
  <div className="col">
    <div className="toolbar">
      {["bold", "italic", "underline", "strikethrough"].map(a => (
        <button
          key={`tool-${a}`}
          type="button"
          title={a}
          className="btn btn-light"
        >
          <i className={`fa fa-${a} fa-fw`} />
        </button>
      ))}
      <button type="button" className="btn btn-light ml-auto" title="Clear">
        <i className="fa fa-eraser fa-fw" />
      </button>
      {[["clipboard", "Copy"], ["bullhorn", "Read"]].map(([a, t]) => (
        <button
          key={`tool-utils-${a}`}
          type="button"
          title={t}
          className="btn btn-light"
        >
          <i className={`fa fa-${a} fa-fw`} />
        </button>
      ))}
    </div>
  </div>
);

export default class NotePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text
    };
  }
  userEdit = ({ target: { value, tagName } }) => {
    const edit = { [tagName === "INPUT" ? "title" : "text"]: value };
    // this.props.updatePad(edit);
    this.setState(edit);
  };
  static getDerivedStateFromProps(nxtPorps, prvProps) {
    if (nxtPorps.title !== prvProps.title || nxtPorps.text !== prvProps.text) {
      return nxtPorps;
    }
    return null;
  }
  render() {
    return (
      <div className="row notepad">
        <Toolbar />
        <div className="col px-4 text-right">
          <button type="button" className="btn btn-link">
            Delete Note
          </button>
          <button type="button" className="btn btn-snow text-uppercase">
            AutoSave Enabled
          </button>
        </div>
        <div className="col-12 pt-4">
          <div className="pad">
            <input
              type="text"
              className="note-title"
              placeholder="Add a title"
              value={this.state.title}
              onChange={this.userEdit}
            />
            <textarea
              value={this.state.text}
              onChange={this.userEdit}
              placeholder="its empty here. Let's write something..."
            />
          </div>
        </div>
      </div>
    );
  }
}
