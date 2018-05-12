import React, { Component, Fragment } from "react";

import "./Notepad.css";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewMode: true,
      padTitle: props.newPad ? '' : 'Title and a loooooong text',
      padText: props.newPad ? '' : 'I am some paragraph\nI am line two of the paragraph'
    }
  }
  handleChange = ({target: {value, name}}) => {
    this.setState({[name]: value});
  }
  componentWillReceiveProps({newPad}) {
    if(newPad) {
      this.setState({previewMode: false, padText: '', padTitle: ''}, () => {
        document.querySelector('input[name="padTitle"]').focus();
      });
    }
  }
  edit = e => {
    e.preventDefault();
    if (this.state.previewMode) {
      this.setState({ previewMode: false }, () => {
        this.refs.notepad.focus();
        if (typeof this.refs.notepad.selectionStart == "number") {
          this.refs.notepad.selectionStart = this.refs.notepad.selectionEnd = this.refs.notepad.value.length;
        } else if (typeof this.refs.notepad.createTextRange != "undefined") {
          var range = this.refs.notepad.createTextRange();
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
                name="padTitle"
                placeholder="Add a title"
                disabled={this.state.previewMode}
                value={this.state.padTitle}
                onChange={this.handleChange}
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
              name="padText"
              placeholder="Write Something.."
              disabled={this.state.previewMode}
              value={this.state.value}
              onChange={this.handleChange}
              ref="notepad"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notepad;
