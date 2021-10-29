import React from 'react';
import LoginPage from '../views/pages/public/Login'
import ChangePasswordPage from '../views/pages/private/user-management/ChangePassword';
import DashboardPage from '../views/pages/private/Dashboard'
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
  path: '/admin/dashboard',
  component: DashboardPage
 },
 {
  path: '/admin/change-password',
  component: ChangePasswordPage
 }
]

const CheckPoint = ({ component, path }: any) => {
 const history = useHistory()

 Http.post('/auth/check-auth', {}).then((res: any) => {
  console.log("Authenticated")
 }).catch((err) => {
  return history.push('/login')
 })

 return <Route path={path} component={component} />
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
      <Redirect exact from="/admin/" to="/admin/dashboard" />
      {privateComponents}
     </Route>
    </Switch>
   </BrowserRouter>
  );
 }
}



export default Routes;
