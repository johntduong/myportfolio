import React from "react";
import { render } from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Artwork from "./Artwork";
import Contact from "./Contact";

const FourOhFour = () => <h1>404</h1>;

const ClientApp = () => {
    return ( 
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/artwork" component={Artwork} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={FourOhFour} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

render(<ClientApp/>, document.getElementById("app"));