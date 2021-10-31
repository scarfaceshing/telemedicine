import React, { Component } from 'react'
import Http from '../api/Api'

import LoginPage from '../views/pages/public/Login'
import ChangePasswordPage from '../views/pages/private/user-management/ChangePassword'
import DashboardPage from '../views/pages/private/Dashboard'
import RolePage from '../views/pages/private/user-management/Role'
import PermissionPage from '../views/pages/private/user-management/Permission'
import UsersPage from '../views/pages/private/user-management/Users'

import {
 BrowserRouter,
 Switch,
 Route,
 Link,
 Redirect,
 useHistory
} from "react-router-dom";
interface IRouteChild {
 path: string;
 component: any;
}
interface IRoute {
 path: string;
 component?: any;
 children?: Array<IRouteChild>;
}


const PrivateRoute: Array<IRoute> = [
 {
  path: '/admin/dashboard',
  component: DashboardPage
 },
 {
  path: '/admin/user-management',
  children: [
   {
    path: '/admin/user-management/user',
    component: UsersPage
   },
   {
    path: '/admin/user-management/change-password',
    component: ChangePasswordPage
   },
   {
    path: '/admin/user-management/role',
    component: RolePage
   }
  ]
 }
]

const CheckPoint = ({ path, component, children }: any) => {
 if (children) {
  return (
   <>
    <Route path={path} />
    {children.map(({ path, component }: IRouteChild, index: number) => (
     <Route path={path} component={component} key={index} />
    ))}
   </>
  )
 } else {
  return (
   <>
    <Route path={path} component={component} />
   </>
  )
 }
}

class Routes extends Component {

 render() {
  // const privateComponents = PrivateRoute.map(({ path, component }, key) => <CheckPoint path={path} component={component} key={key} />)

  return (
   <BrowserRouter>
    <Switch>
     <Redirect exact from="/" to="/login" />
     <Route path="/login" component={LoginPage} />
     <Route path="/admin">
      <Redirect exact from="/admin/" to="/admin/dashboard" />
      {PrivateRoute.map(({ path, component, children }, index: number) => (
       <div key={index} >
        <CheckPoint path={path} component={component} children={children} />
       </div>
      ))}
     </Route>
    </Switch>
   </BrowserRouter >
  );
 }
}



export default Routes;
