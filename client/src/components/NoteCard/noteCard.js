import React, { Component } from "react";
import "./noteCard.css";

class NoteCard extends Component {
  handleClick = ({ target, currentTarget }) => {
    if (target.title === "") {
      const ol = document.querySelector(".noteContainer.sel");
      if (ol) {
        ol.classList.remove("sel");
      }
      currentTarget.classList.add("sel");
      this.props.onClick(currentTarget.getAttribute("data-note-slug"));
    }
  };
  render() {
    const { updated_at, title, notes } = this.props.data;
    debugger;
    var day = new Date(Date.parse(updated_at));
    day = day.getDate()+'/'+day.getMonth()+'/'+day.getFullYear();
    console.log("fff", day);
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
            {day}
          </span>
        </div>
        <h2>{title}</h2>
        <p>
          {notes}
        </p>
      </div>
    );
  }
}

export default NoteCard;
