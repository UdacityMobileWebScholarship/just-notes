import React from "react";
import Navbar from "../../components/partial/Navbar";
import SettingMenu from "../../components/partial/settings-menu";
import "./Settings.css";

const Settings = ({ history, location: { pathname } }) => (
  <div className="Setting-menu">
    <Navbar history={history} pathname={pathname} />
    <div className="options">
      <SettingMenu option="opt" />
    </div>
  </div>
);

export default Settings;
