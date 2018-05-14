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
    const { props: { id, title, text, date } } = this;
    return (
      <div
        className="noteContainer"
        data-note-slug={`note-${id}`}
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
            {date}
          </span>
        </div>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{__html: text}}></p>
      </div>
    );
  }
}

export default NoteCard;
