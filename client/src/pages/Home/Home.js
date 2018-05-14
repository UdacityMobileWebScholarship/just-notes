import React, { Component, Fragment } from "react";
import Navbar from "../../components/partial/Navbar/navbar.js";
import LeftMenu from "../../components/partial/LeftMenu/leftMenu";
import NoteCard from "../../components/NoteCard/noteCard";
import Notepad from "../Notepad";
import utils from "../../components/partial/utils";
import "./Home.css";
window.utils = utils;

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      notepadData: null,
      hideCards: false,
      showPad: false,
      newPad: false
    }
  }
  setView = () => {
    const { props: {location: {pathname}} } = this;
    if(pathname === "/new-note") {
      this.toggleView(true, {newPad: true})
    } else if(/^\/view\//.test(pathname)) {
      console.log('view a note')
    } else if(/^\/edit\//.test(pathname)) {
      console.log('edit a note')
    }
  }
  isMobile = () => {
    const width = window.innerWidth;
    return width < 992;
  };
  toggleView = (showPad, obj = {}) => {
    this.setState({
      showPad,
      ...obj,
      hideCards: showPad === true ? this.isMobile() : false
    });
    if(showPad === false) {
      const ol = document.querySelector('.noteContainer.sel');
      if(ol) {
        ol.classList.remove('sel');
      }
    }
  };
  updateNotepadValue = noteId => {
    noteId = noteId.split('-')[1]
    let newState = { showPad: true, notepadData: utils.getNoteById(noteId) };
    if (this.isMobile()) {
      newState.hideCards = true;
    }
    this.setState(newState, () => {
      this.props.history.push(`/view/${noteId}`)
    });
  };
  handleResize = () => {
    this.setState(prv => ({
      hideCards: this.isMobile() ? !!prv.showPad : false
    }));
  };
  componentDidMount() {
    this.setView();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Navbar getNewPad={this.getNewPad} />
        <div className="pageContainer">
          <div id="leftContainer">
            <LeftMenu />
          </div>
          <div id="rightContainer">
            <div
              id="editorContainer"
              className={!this.state.showPad ? "d-none" : ""}
            >
              <Notepad newPad={this.state.newPad} data={this.notepadData} toggleView={this.toggleView} />
            </div>
            <div
              id="notesCardContainer"
              className={this.state.hideCards ? "d-none" : ""}
            >
              {
                utils.getAllNotes.map(note => <NoteCard key={`note-${note.id}`} {...note} onClick={this.updateNotepadValue} />)
              }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
