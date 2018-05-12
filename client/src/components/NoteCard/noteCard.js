import React, { Component } from "react";
import "./noteCard.css";

class NoteCard extends Component {
  handleClick = ({ target, currentTarget }) => {
    if (target.title === "") {
      const ol = document.querySelector('.noteContainer.sel');
      if(ol) {
        ol.classList.remove('sel');
      }
      currentTarget.classList.add('sel');
      this.props.onClick(
        currentTarget.getAttribute("data-note-slug")
      );
    }
  };
  render() {
    return (
      <div
        className="noteContainer"
        data-note-slug="note-1fn12"
        onClick={this.handleClick}
      >
        <div className="noteContentTop">
          <div>
            <a href="#share" title="Share this note">
              <i className="fas fa-share-square" />
            </a>
            <a href="#download" title="Download this note">
              <i className="fas fa-download" />
            </a>
            <a href="#del" title="Delete this note">
              <i className="fas fa-trash-alt" />
            </a>
          </div>
          <span className="timestamp" title="date">
            Date
          </span>
        </div>
        <h2>Title</h2>
        <p>
          I am some paragraph<br />
          I am line two of the paragraph
        </p>
      </div>
    );
  }
}

export default NoteCard;
