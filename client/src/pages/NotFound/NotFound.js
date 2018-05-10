import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = (props) => (
  <div className="NotFound">
    <h1 className="heading">Page Not Found</h1>
    <p className="text">
      We are sorry but the page you are looking for does not exist.
    </p>
    <button type="button" className="Btnback" onClick={()=> props.history.goBack()}>
      <i className="fa fa-undo fa-lg fa-fw" /> Go to Previous Page
    </button>&nbsp;
    <Link to="/" className="linkBtn">
      <i className="fa fa-home fa-lg fa-fw" /> Go to Home Page
    </Link>
  </div>
);

export default NotFound;
