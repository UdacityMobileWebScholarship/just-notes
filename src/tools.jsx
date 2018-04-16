import React from 'react';
import { Link } from 'react-router-dom';
const I = ({fa}) => (<i className={`fa fa-${fa}`} />);

const Btn = ({children, theme}) => (
  <button type="button" className={`btn btn-${theme} btn-sm`}>{children}</button>
)

const Toolbar = ({theme, toggleTheme}) => (
  <div className="navbar-nav ml-auto">
    <Btn theme={theme}><I fa="bullhorn fa-lg fa-fw" /></Btn>
    <Btn theme={theme}><I fa="download fa-lg fa-fw" /></Btn>
    <Btn theme={theme}><I fa="clipboard fa-lg fa-fw" /></Btn>
    <button type="button" onClick={toggleTheme} className={`btn btn-${theme} btn-sm`}>
      <I fa="lightbulb-o fa-lg fa-fw" />
    </button>
    <Link to="/settings" className={`btn btn-${theme} btn-sm`}><I fa="cog fa-lg fa-fw" /></Link>
    <Link to="/about" className={`btn btn-${theme} btn-sm`}><I fa="info fa-lg fa-fw" /></Link>
  </div>
)

const TimeStamp = ({time}) => {
  return (<small className="text-muted">{time}</small>);
};

export {I, Btn, Toolbar, TimeStamp};
