import React, { lazy } from 'react'
import Http from '../../../api/Api'

import { BrowserRouter, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import SystemLayout from '../../layout/System'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

import ChangePasswordPage from '../private/user-management/ChangePassword'
import DashboardPage from '../private/Dashboard'
import RolePage from '../private/user-management/Role'
import PermissionPage from '../private/user-management/Permission'
import PermissionRolePage from '../private/user-management/PermissionRole'
import UsersPage from '../private/user-management/Users'

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
    component: UsersPage
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
   },
   {
    path: '/admin/user-management/permission-role',
    component: PermissionRolePage
   }
  ]
 }
]

const Index = () => {
 const PageList = PrivateRoute.map(({ path, component, children }: any, index: number) => (<CheckPoint path={path} component={component} children={children} key={index} />))

 return (
  <BrowserRouter>
   <SystemLayout>
    <SystemLayout.Slot name="Header">
     <Typography>
      Sandbox - Telemedicine App
     </Typography>
    </SystemLayout.Slot>
    <SystemLayout.Slot name="Content">
     <Switch>
      <Redirect exact from="/admin/" to="/admin/dashboard" />
      {PageList}
     </Switch>
    </SystemLayout.Slot>
    <SystemLayout.Slot name="Footer">
     <h1>Footer</h1>
    </SystemLayout.Slot>
   </SystemLayout>
  </BrowserRouter>
 )
}

export default Index;
