import React, { Component, Fragment } from "react";

import "./Notepad.css";

class Notepad extends Component {
  render() {
    return (
      <Fragment>
        <div className="editorInnerContainer">
          <div className="editorTop">
            <div className="title">
              <input type="text" placeholder="Add a title" disabled={true} />
            </div>
          </div>
          <div className="editorBody">
            <textarea placeholder="Write Something.." disabled={true} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notepad;
