import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";

import LoginPage from '../views/pages/public/Login'
import AdminPage from '../views/pages/private/Index'

class Routes extends Component {

 render() {

  return (
   <BrowserRouter>
    <Switch>
     <Redirect exact from="/" to="/login" />
     <Route path="/login" component={LoginPage} />
     <Route path="/admin" component={AdminPage} />
    </Switch>
   </BrowserRouter >
  );
 }
}



export default Routes;
