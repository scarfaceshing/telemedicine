import React from 'react';
import LoginPage from '../views/pages/public/Login'
import AdminPage from '../views/pages/private/Index'
import DashboardPage from '../views/pages/private/Dashboard'
import UserManagementPage from '../views/pages/private/User'
import Http from '../api/Api'

import {
 BrowserRouter,
 Switch,
 Route,
 Link,
 Redirect,
 useHistory
} from "react-router-dom";

const PrivateRoute = [
 {
  path: '/dashboard',
  component: DashboardPage
 },
 {
  path: '/usermanagement',
  component: UserManagementPage
 }
]

const CheckPoint = ({ component, path, key }: any) => {
 const history = useHistory()

 Http.post('/auth/check-auth', {}).then((res) => {
  console.log("Authenticated")
 }).catch((err) => {
  return history.push('/login')
 })

 return <Route path={path} component={component} key={key} />
}


class Routes extends React.Component {

 render() {
  const privateComponents = PrivateRoute.map(({ path, component }, key) => <CheckPoint path={path} component={component} key={key} />)

  return (
   <BrowserRouter>
    <Switch>
     <Redirect exact from="/" to="/login" />
     <Route path="/login" component={LoginPage} />
     <Route path="/admin">
      <Route path="/admin/index" component={AdminPage} />
      <Route path="/admin/dashboard" component={DashboardPage} />
     </Route>
    </Switch>
   </BrowserRouter>
  );
 }
}



export default Routes;
