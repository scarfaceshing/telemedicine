import React, { FC, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import HomePage from '../views/pages/Home'
import AboutUs from '../views/pages/AboutUs'
import ServicesPage from '../views/pages/Services'
import FaqsPage from '../views/pages/Faqs'
import CareersPage from '../views/pages/Careers'

interface IProps { }

const Routes: FC<IProps> = (props) => {

 return (
  <BrowserRouter>
   <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/home" component={HomePage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/services" component={ServicesPage} />
    <Route path="/faqs" component={FaqsPage} />
    <Route path="/careers" component={CareersPage} />
   </Switch>
  </BrowserRouter >
 )
}

const NotFound = () => {
 return <>{'You have landed on a page that doesn\'t exist'}</>
}

export default Routes
