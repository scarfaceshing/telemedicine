import React, { Component, FC, MouseEventHandler, useState, useEffect } from 'react'
import { Theme, CSSObject, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Collapse, ListItemButton } from '@mui/material'

import Http from '../../../api/Api'
import { useLocation, Link, BrowserRouter, Redirect, Router, useHistory } from 'react-router-dom'

import LogoutIcon from '@mui/icons-material/Logout'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import { Drawer, DrawerHeader } from '../Drawer'

interface INavChildren {
 path?: string;
 name?: string;
}
interface INavigation {
 path: string;
 name: string;
 icon: JSX.Element;
 open?: boolean;
 children?: Array<INavChildren>;
}
interface IProps {
 onToggleDrawer: (event: React.MouseEvent<HTMLButtonElement>) => void;
 drawerWidth: number;
 drawerOpen: boolean;
}


const navigationItem = [
 {
  path: '/admin/dashboard',
  name: 'Dashboard',
  icon: <DashboardIcon />,
 },
 {
  path: '/admin/user-management',
  name: 'User Management',
  icon: <PersonIcon />,
  open: true,
  children: [
   {
    path: '/admin/user-management/user',
    name: 'Users List'
   },
   {
    path: '/admin/user-management/change-password',
    name: 'Change Password'
   },
   {
    path: '/admin/user-management/role',
    name: 'Roles'
   },
   {
    path: '/admin/user-management/permission',
    name: 'Permission'
   }
  ]
 }
];

const Navigation: FC<IProps> = ({ drawerOpen, drawerWidth, onToggleDrawer }) => {

 const [navItem, setNavItem] = useState(navigationItem)
 const history = useHistory()

 useEffect(() => {
  navItem.find((item: any, index: number) => {
   navItem[index].open = false
   setNavItem([...navItem])
  })
 }, [drawerOpen])

 const getUser = (): void => {
  Http.get('auth/data/user', {}).then((res: any) => {
   console.log(res.data);
  })
 }

 const getUserInfo = (): void => {

  Http.get('auth/me', {}).then((res) => {
   console.log(res);
  })
 }

 const onLogout = () => {
  Http.post('auth/logout', {})
 }

 const logout = () => {
  onLogout()

  history.push('/')
 }

 const collapseClick = (index: number) => {
  const open = !navItem[index].open
  navItem[index].open = open
  setNavItem([...navItem])
 }

 const CheckIcon = ({ open }: any) => {
  if (open) {
   return (
    <ExpandLess />
   )
  } else {
   return (
    <ExpandMore />
   )
  }
 }

 return (
  <>
   <Drawer variant="permanent" open={drawerOpen}>
    <DrawerHeader>
     <IconButton onClick={onToggleDrawer}>
      <ChevronLeftIcon />
     </IconButton>
    </DrawerHeader>
    <Divider />
    <List>

     {navItem.map(({ icon, name, children, open }: INavigation, index: number) => (
      <div key={index}>
       <ListItem button onClick={() => collapseClick(index)}>
        <ListItemIcon>
         {icon}
        </ListItemIcon>
        <ListItemText>
         {name}
        </ListItemText>
        {children ? <CheckIcon open={open} /> : ''}
       </ListItem>
       {children?.map(({ path, name }: any, index: number) => (
        <Collapse key={index} in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
          <ListItem sx={{ pl: 2 }} button component={Link} to={path}>
           <ListItemIcon>
           </ListItemIcon>
           <ListItemText>
            {name}
           </ListItemText>
          </ListItem>
         </List>
        </Collapse>
       ))}
      </div>
     ))}

     <ListItem button onClick={logout}>
      <ListItemIcon>
       <LogoutIcon />
      </ListItemIcon>
      <ListItemText>
       Logout
      </ListItemText>
     </ListItem>

    </List>
   </Drawer>
  </>
 )
}

export default Navigation;
