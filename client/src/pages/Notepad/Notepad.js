import React, { Component, Fragment } from "react";

import "./Notepad.css";

class Notepad extends Component {
  state = {
    previewMode: true
  };
  edit = e => {
    e.preventDefault();
    if (this.state.previewMode) {
      this.setState({ previewMode: false }, () => {
        this.refs.notepad.focus();
        if (typeof this.refs.notepad.selectionStart === "number") {
          this.refs.notepad.selectionStart = this.refs.notepad.selectionEnd = this.refs.notepad.value.length;
        } else if (typeof this.refs.notepad.createTextRange !== "undefined") {
          let range = this.refs.notepad.createTextRange();
          range.collapse(false);
          range.select();
        }
      });
    }
  };
  goBack = e => {
    e.preventDefault();
    this.props.toggleView(false);
  };
  render() {
    return (
      <Fragment>
        <div className="editorInnerContainer">
          <div className="editorTop">
            <div className="title">
              <input
                type="text"
                placeholder="Add a title"
                disabled={this.state.previewMode}
                value={"Title and a loooooong text"}
              />
            </div>
            {this.state.previewMode ? (
              <div className="tools">
                <a
                  id="edit"
                  href="#edit"
                  onClick={this.edit}
                  title="Edit this note"
                >
                  <i className="fas fa-pencil-alt" />
                </a>
                <a id="delete" href="" title="Delete this note">
                  <i className="fas fa-trash-alt" />
                </a>
                <a id="download" href="" title="Download this note">
                  <i className="fas fa-download" />
                </a>
                <a id="share" href="" title="Share this note">
                  <i className="fas fa-share-square" />
                </a>
                <a
                  id="close"
                  href="#close"
                  onClick={this.goBack}
                  title="Close this note"
                >
                  <i className="fas fa-times" />
                </a>
              </div>
            ) : null}
          </div>
          <div className="editorBody">
            <textarea
              placeholder="Write Something.."
              disabled={this.state.previewMode}
              value={`I am some paragraph\nI am line two of the paragraph`}
              ref="notepad"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notepad;
