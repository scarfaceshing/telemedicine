import React from 'react';
import DashboardPage from '../views/pages/private/Dashboard'
import LoginPage from '../views/pages/public/Login'
import Http from '../api/Api'

import {
 BrowserRouter,
 Switch,
 Route,
 Link,
 Redirect,
 useHistory
} from "react-router-dom";

const PublicRoute = [
 {
  path: '/login',
  component: LoginPage
 }
]

const PrivateRoute = [
 {
  path: '/dashboard',
  component: DashboardPage
 }
]

const CheckAuth = () => {

 let auth = Http.post('auth/check-auth', {}).then((res: any) => {
  return res.data.authenticate
 })

 return auth
}

const CheckPoint = ({ component, path }: any) => {
 const auth = CheckAuth()

 return <Route path={path} component={component} />;
}


class Routes extends React.Component {

 render() {
  const publicComponents = PublicRoute.map(({ path, component }, key) => <Route path={path} component={component} key={key} />)
  const privateComponents = PrivateRoute.map(({ path, component }, key) => <CheckPoint path={path} component={component} key={key} />)

  return (
   <BrowserRouter>
    <Switch>
     <Redirect exact from="/" to="/login" />
     {publicComponents}
     {privateComponents}
    </Switch>
   </BrowserRouter>
  );
 }
}



export default Routes;
