import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};
renderApp();
