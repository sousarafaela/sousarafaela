import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import RoutingWrapper from "./RoutingWrapper";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home?page=landing" />
                </Route>
                <Route exact path='/home'>
                    <RoutingWrapper/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
