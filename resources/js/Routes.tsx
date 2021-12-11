import React, { FC, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import LoginPage from '../views/pages/public/Login'
import AdminPage from '../views/pages/private/Index'
import HomePage from '../views/pages/Home'

interface IProps { }

const Routes: FC<IProps> = (props) => {

 const PrivateRoute = ({ }) => {
  return (
   <Route path="/admin" component={AdminPage} />
  )
 }


 return (
  <BrowserRouter>
   <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/home" component={HomePage} />
    <PrivateRoute />
   </Switch>
  </BrowserRouter >
 )
}

const NotFound = () => {
 return <>You have landed on a page that doesn't exist</>
}

export default Routes
