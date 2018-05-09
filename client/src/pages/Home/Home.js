import React, { Component, Fragment } from "react";
import Navbar from "../../components/partial/Navbar/navbar.js";
import LeftMenu from "../../components/partial/LeftMenu/leftMenu";
import NoteCard from "../../components/NoteCard/noteCard";
import hotKeyLst from "./hotKeys.js";
import "./Home.css";

class Home extends Component {
  state = {
    showCards: true
  }
  setView = (showCards) => {
    this.setState({showCards});
  }
  render() {
    console.log(hotKeyLst);    
    return (
      <Fragment>
        <Navbar />
        <div className="pageContainer">
          <div id="leftContainer">
            <LeftMenu setView={this.setView} />
          </div>
          <div id="rightContainer">
            <div id="notesCardContainer" className={!this.state.showCards ? 'd-none' : ''}>
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
            </div>
            <div className={`keys${this.state.showCards ? ' d-none' : ''}`}>
              <h1>Hot Keys</h1>
              {
                Object.keys(hotKeyLst).map((a,b) => (
                  <div key={`keyLst-${a}`} className="list">
                    <h2>{a}</h2>
                    <div className="item item-headings">
                      <div className="item-heading">Key</div>
                      <div className="item-heading">Name</div>
                      <div className="item-heading">Description</div>
                    </div>
                    {
                      hotKeyLst[a].map(({key, name, desc}, i) => (
                        <div key={`key-for-${name}`} className="item">
                          <div className="item-key"><code>{key}</code></div>
                          <div className="item-name">{name}</div>
                          <div className="item-desc">{desc}</div>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
