import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              { text: 'NotePad' }
            ]
          }
        ]
      }
    ]
  }
})

export default class NoteEditor extends Component {
  state = { value: initialValue }
  onChange = ({value}) => {
    this.setState({value})
  }
  onKeyDown = (event, change) => {
    console.log({event, key: event.key, change});
    if (!event.ctrlKey) {
      return;
    }
    const lst = {b: 'bold', i: 'italic', '`': 'code', k: 'code', d: 'strikethrough'};
    if(/b|i|`|d|k/.test(event.key)) {
      event.preventDefault();
      const type = lst[event.key];
      console.log(type);
      change.toggleMark(type);
      return true;
    }
  }
  render() {
    return (
      <Editor
        placeholder="Write...."
        className="write-area p-2"
        value={this.state.value}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        renderMark={this.renderMark} />
    )
  }
  renderMark = ({mark: {type}, children}) => {
    if(type === 'bold') {
      return <strong>{children}</strong>;
    } else if (type === 'italic') {
      return <i>{children}</i>
    } else if (type === 'code') {
      return <code>{children}</code>
    } else if (type === 'strikethrough') {
      return <del>{children}</del>
    }
  }
}
