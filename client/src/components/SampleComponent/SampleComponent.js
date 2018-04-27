import React from "react";
import PropTypes from "prop-types";
import "./SampleComponent.css";

const SampleComponent = ({ message }) => {
  return <div className="SampleComponent">{message}</div>;
};

SampleComponent.propTypes = {
  message: PropTypes.string
};

export default SampleComponent;
