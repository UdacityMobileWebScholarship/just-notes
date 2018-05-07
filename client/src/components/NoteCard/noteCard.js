import React, { Component } from "react";
import "./noteCard.css";

class NoteCard extends Component {
  render() {
    return (
      <div className="noteContainer">
        <div className="noteContentTop">
          <div>
            <a href="" title="Share this note">
              <i className="fas fa-share-square" />
            </a>
            <a href="" title="Download this note">
              <i className="fas fa-download" />
            </a>
            <a href="" title="Delete this note">
              <i className="fas fa-trash-alt" />
            </a>
          </div>
          <span>Date</span>
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
