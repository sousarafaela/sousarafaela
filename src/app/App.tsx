import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Landing from "./landing/Landing";
import ProfilePage from "./profile/ProfilePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Landing/>
                </Route>
                <Route path='/profile' exact>
                    <ProfilePage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
