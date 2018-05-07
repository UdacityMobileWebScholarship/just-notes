import React from "react";
import PropTypes from "prop-types";
import "./slider.css";

function Slider({ name, on, handle }) {
  return (
    <label className="slider">
      <input type="checkbox" name={name} checked={on} onChange={handle} />
      <span className="toggle" />
    </label>
  );
}

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  on: PropTypes.bool.isRequired,
  handle: PropTypes.func.isRequired
};

export default Slider;
