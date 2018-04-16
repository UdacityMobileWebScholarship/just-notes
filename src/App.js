import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Notes from './note-pad.jsx';
const Dummy = ({text}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <Link to="/" className="display-2">&#171;</Link>
      </div>
    </div>
    <div className="row">
      <div className="col text-center">
        <h1 className="display-1">{text}</h1>
      </div>
    </div>
  </div>
)
class App extends Component {
  state = {
    theme: 'light'
  }
  toggleTheme = () => {
    let el = document.querySelector('body'), theme = 'light';
    if(el.classList.contains('theme-dark')) {
      el.classList.remove('theme-dark')
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#6c757d');
    } else {
      theme = 'dark';
      el.classList.add('theme-dark');
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#343a40');
    }
    this.setState({theme});
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Notes {...this.state} toggleTheme={this.toggleTheme} />} />
          <Route path="/about" render={() => <Dummy text="About" />} />
          <Route path="/settings" render={() => <Dummy text="Settings" />} />
          <Route render={() => <Dummy text="404 | Page Not Found" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
