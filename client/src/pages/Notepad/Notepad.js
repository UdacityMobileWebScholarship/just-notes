import React, { Component, Fragment } from "react";

import "./Notepad.css";

class Notepad extends Component {
  render() {
    return (
      <Fragment>
        <div className="editorInnerContainer">
          <div className="editorBody">
            <textarea placeholder="Write Something.." />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notepad;
