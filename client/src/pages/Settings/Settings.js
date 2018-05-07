import React from "react";
import Navbar from "../../components/partial/Navbar";
import SettingMenu from "../../components/partial/settings-menu";
import "./Settings.css";

const Settings = ({location: {pathname}}) => (
  <div className="Setting-menu">
    <Navbar pathname={pathname} />
    <div className="options">
      <SettingMenu option="opt" />
    </div>
  </div>
);

export default Settings;
