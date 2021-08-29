import React from 'react';
import { BrowserRouter as Router, Switch, } from "react-router-dom";
import RoutingWrapper from "./RoutingWrapper";

function App() {
    return (
        <Router>
            <Switch>
                <RoutingWrapper/>
            </Switch>
        </Router>
    )
}

export default App;
