import React, { PureComponent } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import "./drop.css";

export default class Drop extends PureComponent {
  constructor() {
    super();
    this.state = { show: false };
    this.toggle = this.toggle.bind(this);
    this.clickOnPage = this.clickOnPage.bind(this);
  }
  toggle() {
    this.setState(prv => ({ show: !prv.show }));
  }
  clickOnPage({ target }) {
    if (this.mount && !findDOMNode(this).contains(target)) {
      this.setState({ show: false });
    }
  }
  componentDidUpdate() {
    if (this.mount) {
      if (this.state.show) {
        window.addEventListener("click", this.clickOnPage);
      } else {
        window.removeEventListener("click", this.clickOnPage);
      }
    }
  }
  componentDidMount() {
    this.mount = true;
  }
  componentWillUnmount() {
    this.mount = false;
    window.removeEventListener("click", this.clickOnPage);
  }
  render() {
    const {
      props: { triger, icon, right, children }
    } = this;
    return (
      <div className="drop">
        <button
          type="button"
          onClick={this.toggle}
          className={`drop-triger${triger ? ` ${triger}` : ""}`}
        >
          {icon ? <i className={icon} /> : null}
        </button>
        <div
          className={`drop-menu${right ? " menu-right" : ""}${
            this.state.show ? " show" : ""
          }`}
        >
          {children}
        </div>
      </div>
    );
  }
}

Drop.propTypes = {
  triger: PropTypes.string,
  icon: PropTypes.string,
  right: PropTypes.bool,
  children: PropTypes.element
};
