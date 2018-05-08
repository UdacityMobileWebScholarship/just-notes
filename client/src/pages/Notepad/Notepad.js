import React, { Component, Fragment } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import initialValue from "./value.json";

import "./Notepad.css";

class Notepad extends Component {
  state = {
    value: Value.fromJSON(initialValue)
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

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
          <div className="editorBody">
            <Editor
              placeholder="Let's write something..."
              value={this.state.value}
              onChange={this.onChange}
              spellCheck
              autoFocus
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notepad;
