import React, { Component, Fragment } from "react";
import Navbar from "../../components/partial/Navbar/navbar.js";
import LeftMenu from "../../components/partial/LeftMenu/leftMenu";
import NoteCard from "../../components/NoteCard/noteCard";
import Notepad from "../Notepad";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="pageContainer">
          <div id="leftContainer">
            <LeftMenu />
          </div>
          <div id="rightContainer">
            <div id="editorContainer">
              <Notepad />
            </div>
            <div id="notesCardContainer">
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
