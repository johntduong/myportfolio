import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const ClientApp = () => <h1>Hello There!</h1>;

render(<ClientApp />, document.getElementById("app"));
