import React from 'react'
import Http from '../../../api/Api'
import ChangePasswordPage from '../private/user-management/ChangePassword'
import DashboardPage from '../private/Dashboard'
import RolePage from '../private/user-management/Role'
import PermissionPage from '../private/user-management/Permission'
import UsersPage from '../private/user-management/Users'

import { BrowserRouter, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import SystemLayout, { Header, Body, Footer } from '../../layout/System'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

interface IRouteChild {
 path: string;
 component: any;
}
interface IRoute {
 path: string;
 component?: any;
 children?: Array<IRouteChild>;
}

const DrawerHeader = styled('div')(({ theme }) => ({
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'flex-end',
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
}));


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
    component: () => UsersPage
   },
   {
    path: '/admin/user-management/change-password',
    component: ChangePasswordPage
   },
   {
    path: '/admin/user-management/role',
    component: RolePage
   },
   {
    path: '/admin/user-management/permission',
    component: PermissionPage
   }
  ]
 }
]

const Index = () => {
 const PageList = PrivateRoute.map(({ path, component, children }: any, index: number) => (<CheckPoint path={path} component={component} children={children} key={index} />))

 return (
  <BrowserRouter>
   <SystemLayout>
    <Header>
     <Typography>
      Sandbox - Telemedicine App
     </Typography>
    </Header>
    <Body>
     <Switch>
      <Redirect exact from="/admin/" to="/admin/dashboard" />
      {PageList}
     </Switch>
    </Body>
   </SystemLayout>
  </BrowserRouter>
 )
}

export default Index;
