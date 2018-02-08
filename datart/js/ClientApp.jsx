import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

const FourOhFour = () => <h1>404</h1>;

const ClientApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

render(<ClientApp />, document.getElementById("app"));
