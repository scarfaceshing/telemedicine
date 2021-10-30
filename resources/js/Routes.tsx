import React from 'react'
import Http from '../api/Api'

import LoginPage from '../views/pages/public/Login'
import ChangePasswordPage from '../views/pages/private/user-management/ChangePassword'
import DashboardPage from '../views/pages/private/Dashboard'
import RolePage from '../views/pages/private/user-management/Role'
import PermissionPage from '../views/pages/private/user-management/Permission'
import UsersPage from '../views/pages/private/user-management/Users'
import PermissionRolePage from '../views/pages/private/user-management/PermissionRole'

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
 },
 {
  path: '/admin/role',
  component: RolePage
 },
 {
  path: '/admin/permission',
  component: PermissionPage
 },
 {
  path: '/admin/users',
  component: UsersPage
 },
 {
  path: '/admin/permission-role',
  component: PermissionRolePage
 }
]

const CheckPoint = ({ component, path }: any) => {
 const history = useHistory()

 /* Http.post('/auth/check-auth', {}).then((res: any) => {
  console.log("Authenticated")
 }).catch((err) => {
  return history.push('/login')
 })
 */
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
