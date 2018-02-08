import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.jsx";

const FourOhFour = () => <h1>404</h1>;

const ClientApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

render(<ClientApp />, document.getElementById("app"));
