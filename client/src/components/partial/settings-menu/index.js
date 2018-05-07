import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Slider from "../Slider";

const headerStyle = {color: "var(--primary-color)", fontWeight: 600, paddingBottom: 1, fontSize: 12}

export default class SettingMenu extends Component {
  constructor() {
    super();
    this.state = {
      AutoSave: false,
      DarkMode: false,
      Opacity: false
    };
    this.handle = this.handle.bind(this);
  }
  handle({ target: { name } }) {
    this.setState(prv => ({
      [name]: !prv[name]
    }));
  }
  render() {
    const {props: { option }} = this;
    return (
      <Fragment>
        <div className={option}>
          AutoSave <Slider name="AutoSave" on={this.state.AutoSave} handle={this.handle} />
        </div>
        <div className={option} style={headerStyle}>THEME</div>
        <div className={option}>
          DarkMode <Slider name="DarkMode" on={this.state.DarkMode} handle={this.handle} />
        </div>
        <div className={option}>
          Opacity <Slider name="Opacity" on={this.state.Opacity} handle={this.handle} />
        </div>
      </Fragment>
    );
  }
}

SettingMenu.propTypes = {
  option: PropTypes.string
};
