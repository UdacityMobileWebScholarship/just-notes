import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from './sw/ServiceWorker';
import App from "./App";
import RouteManager from "./RouteManager";
import store from "./core/store";

import "./index.css";
import "../src/Connectivity/Offline_lang_en.css";
import "../src/Connectivity/Offline_theme.css";
// import "offline-js";

ReactDOM.render(
  <Provider store={store}>
    <App>
      <RouteManager />
    </App>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();