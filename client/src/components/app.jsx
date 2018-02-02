import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from "./header";
import Chirps from "./chirps";
import SingleChirp from "./singleChirp";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Chirps} />
                        <Route path="/chirps/:id" component={SingleChirp} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;