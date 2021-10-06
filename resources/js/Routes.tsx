import React from 'react';
import IndexPage from '../views/pages/Index'
import LoginPage from '../views/auth/Login'
import TestPage from '../test_only/Index'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class Routes extends React.Component {
    render() {
        
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/index" component={IndexPage} />
                    <Route path="/test" component={TestPage} />
                </Switch>
            </Router>
          );
    }
}



export default Routes;
