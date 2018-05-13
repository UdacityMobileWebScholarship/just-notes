import React, { Component, Fragment } from "react";
import Navbar from "../../components/partial/Navbar/navbar.js";
import LeftMenu from "../../components/partial/LeftMenu/leftMenu";
import NoteCard from "../../components/NoteCard/noteCard";
import Notepad from "../Notepad";

import "./Home.css";

class Home extends Component {
  state = {
    hideCards: false,
    showPad: false
  };
  isMobile = () => {
    const width = window.innerWidth;
    return width < 992;
  };
  toggleView = showPad => {
    this.setState({
      showPad,
      hideCards: showPad === true ? this.isMobile() : false
    });
    if (showPad === false) {
      const ol = document.querySelector(".noteContainer.sel");
      if (ol) {
        ol.classList.remove("sel");
      }
    }
  };
  updateNotepadValue = noteId => {
    let newState = { showPad: true };
    if (this.isMobile()) {
      newState.hideCards = true;
    }
    this.setState(newState);
  };
  handleResize = () => {
    this.setState(prv => ({
      hideCards: this.isMobile() ? !!prv.showPad : false
    }));
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="pageContainer">
          <div id="leftContainer">
            <LeftMenu />
          </div>
          <div id="rightContainer">
            <div
              id="editorContainer"
              className={!this.state.showPad ? "d-none" : ""}
            >
              <Notepad toggleView={this.toggleView} />
            </div>
            <div
              id="notesCardContainer"
              className={this.state.hideCards ? "d-none" : ""}
            >
              <NoteCard onClick={this.updateNotepadValue} />
              <NoteCard onClick={this.updateNotepadValue} />
              <NoteCard onClick={this.updateNotepadValue} />
              <NoteCard onClick={this.updateNotepadValue} />
              <NoteCard onClick={this.updateNotepadValue} />
              <NoteCard onClick={this.updateNotepadValue} />
              <NoteCard onClick={this.updateNotepadValue} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
