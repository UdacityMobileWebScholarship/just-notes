import React, { Component, Fragment } from 'react';
import { Toolbar, I, Btn, TimeStamp } from './tools.jsx';
import NoteEditor from './note-editor.jsx';

const noteHeads = [
  { text: 'Note Pad', time: '2m', active: true },
  { text: 'Old Note', time: '2d' },
  { text: 'Something', time: '1w' },
  { text: 'Comming Soon', time: '4d' }
]

export default class Notes extends Component {
  render() {
    const {props: {theme}} = this;
    return (
      <Fragment>
        <nav className={`navbar navbar-expand navbar-${theme} bg-${theme} py-1 pl-1`}>
          <button type="button" className={`btn btn-${theme} btn-sm mr-1`} data-toggle="collapse" data-target="#noteHeads"  aria-controls="noteHeads" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="/" className="navbar-brand">Just Note</a>
          <div className="navbar-nav">
            <Btn theme={theme}><I fa="plus fa-lg fa-fw"/></Btn>
            <Btn theme={theme}><I fa="save fa-lg fa-fw" /></Btn>
            <Btn theme={theme}><I fa="cloud fa-lg fa-fw" /></Btn>
            <Btn theme={theme}><I fa="search fa-lg fa-fw" /></Btn>
          </div>
          <div className="navbar-nav ml-auto">
            <div className="btn-group btn-group-sm btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-outline-secondary active">
                <input type="radio" name="edit" /> Edit
              </label>
              <label className="btn btn-outline-secondary">
                <input type="radio" name="view" /> View
              </label>
            </div>
          </div>
          <Toolbar {...this.props} />
        </nav>
        <div className="container-fluid">
          <div className="row note-app">
            <div className="col-2 collapse show note note-menu" id="noteHeads">
              {
                noteHeads.map(({active, text, time}, i) => (
                  <div key={`n-${text}-${i}`} className={`row noteHead${active ? ' active': ''}`}>
                    <div className="col-1 stamp"><I fa="sticky-note-o" /></div>
                    <div className="col note--title" title={text}>{text}</div>
                    <div className="col-2 note--timestamp"><TimeStamp time={time} /></div>
                  </div>
                ))
              }
            </div>
            <div className="col note note-content p-0">
              <NoteEditor />
              <div className="meta text-muted d-flex">
                <button type="button" className="btn btn-link btn-sm"><I fa="share-alt" /> Share</button>&nbsp;
                <button type="button" className="btn btn-link btn-sm"><I fa="trash" /> Delete</button>&nbsp;
                <kbd className="bg-light text-secondary">status: {'<state>'}</kbd>
                <button className="btn btn-link btn-sm text-dark ml-auto">user: </button>&nbsp;
                <button type="button" className="btn btn-link btn-sm">Log Out</button>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
