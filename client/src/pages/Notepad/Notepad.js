import React, { Component, Fragment } from "react";

import "./Notepad.css";

class Notepad extends Component {
  render() {
    return (
      <Fragment>
        <div className="editorInnerContainer">
          <div className="editorTop">
            <input
              type="text"
              id="noteTitle"
              value="Some Title"
              disabled={true}
            />
            <div id="tools">
              <a href="" title="Edit this note">
                <i className="fas fa-pencil-alt" />
              </a>
              <a href="" title="Delete this note">
                <i className="fas fa-trash" />
              </a>
              <a href="" title="Download this note">
                <i className="fas fa-download" />
              </a>
              <a href="" title="Share this note">
                <i className="fas fa-share-square" />
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notepad;
