import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./Routes";

import "./services/firebase";

import "./global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
