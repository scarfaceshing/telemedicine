import React from 'react';
import HomePage from '../views/pages/private/Home'
import LoginPage from '../views/pages/public/Login'

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
     <Route path="/home" component={HomePage} />
    </Switch>
   </Router>
  );
 }
}



export default Routes;
