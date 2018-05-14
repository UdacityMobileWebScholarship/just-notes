import React, { Component, Fragment } from "react";
import Navbar from "../../components/partial/Navbar/navbar.js";
import LeftMenu from "../../components/partial/LeftMenu/leftMenu";
import NoteCard from "../../components/NoteCard/noteCard";
import Notepad from "../Notepad";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCards: false,
      showPad: false,
      allData: []
    };
  }
  
  componentWillMount(){
    var _this = this;
    var allData = [];
    fetch(`http://localhost:8080/notes/`)
    .then( function(response) {
      return response.json();
    })
    .then( function(response) {
      var res = response;
      res.notes.map(eachRes => {
        allData.push(eachRes);
      });
      _this.setState({ allData: allData});
    })
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
    var notes = [];
    console.log(this.state.allData);
    this.state.allData.map(a => {
      notes.push(<NoteCard data={a} onClick={this.updateNotepadValue} />);
    });
    //console.log(notes);
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
              {/* <NoteCard data ={} onClick={this.updateNotepadValue} />
              <NoteCard data={} onClick={this.updateNotepadValue} />
              <NoteCard data={} onClick={this.updateNotepadValue} />
              <NoteCard data={} onClick={this.updateNotepadValue} />
              <NoteCard data={} onClick={this.updateNotepadValue} />
              <NoteCard data={} onClick={this.updateNotepadValue} />
              <NoteCard data={} onClick={this.updateNotepadValue} /> */}
              {notes}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
