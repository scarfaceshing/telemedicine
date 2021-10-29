import React, { Component, useState } from 'react'
import { Theme, CSSObject, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Collapse, ListItemButton } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Http from '../../../api/Api'
import { useLocation, Link, BrowserRouter, Router, useHistory } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MuiDrawer from '@mui/material/Drawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import PersonIcon from '@mui/icons-material/Person'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import Global from '../../../global/index'
import { AnyPtrRecord } from 'dns'
// import history from '../../../global/history'

interface IProps {
 history?: any;
}

interface IState {
 openNav: boolean;
}

interface IProps {
 onToggleDrawer: (event: React.MouseEvent<HTMLButtonElement>) => void;
 drawerWidth: number;
 drawerOpen: boolean;
}

const drawerWidth = Global.drawerWidth;

const openedMixin = (theme: Theme): CSSObject => ({
 width: drawerWidth,
 transition: theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
 }),
 overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
 transition: theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 overflowX: 'hidden',
 width: `calc(${theme.spacing(7)} + 1px)`,
 [theme.breakpoints.up('sm')]: {
  width: `calc(${theme.spacing(9)} + 1px)`,
 },
});

const DrawerHeader = styled('div')(({ theme }) => ({
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'flex-end',
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
 ({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
   ...openedMixin(theme),
   '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
   ...closedMixin(theme),
   '& .MuiDrawer-paper': closedMixin(theme),
  }),
 }),
);

const navItem = [
 {
  path: '/admin/dashboard',
  name: 'Dashboard',
  icon: <DashboardIcon />,
  hasChild: false
 },
 {
  path: '/admin/user-management',
  name: 'User Management',
  icon: <PersonIcon />,
  hasChild: true,
  open: false,
  children: [
   {
    path: '/admin/user-management/users',
    name: 'Users'
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
   },
   {
    path: '/admin/user-management/permission-role',
    name: 'Permission Role'
   }
  ]
 }
];

/* const NavItem = [
 {
  path: '/admin/dashboard',
  name: 'Dashboard',
  icon: <DashboardIcon />
 },
 {
  path: '/admin/user-management',
  name: 'User Management',
  icon: <PersonIcon />
 }
] */

const Navigation = (props: IProps) => {
 const [openNav, setOpenNav] = useState(false);
 const [drawerOpen, setDrawerOpen] = useState(false);
 const history = useHistory()

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

 const logout = (): void => {
  Http.post('auth/logout', {}).then((res) => {
   history.push('/')
  })
 }

 const collapseClick = (event: any): void => {
  const open = !openNav
  setOpenNav(open)
 }

 const CompNav = ({ path, name, hasChild, icon, children, open }: any): JSX.Element => {

  let navComp: JSX.Element = <></>

  if (hasChild) {

   navComp =
    <>
     <ListItem button onClick={() => {

     }}>
      <ListItemIcon>
       {icon}
      </ListItemIcon>
      <ListItemText>
       {name}
      </ListItemText>
      {open ? <ExpandLess /> : <ExpandMore />}
     </ListItem>
     {children.map(({ path, name }: any, index: number) => (
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

    </>
  } else {
   navComp = <ListItem button component={Link} to={path}>
    <ListItemIcon>
     {icon}
    </ListItemIcon>
    <ListItemText>
     {name}
    </ListItemText>
   </ListItem>
  }

  return (
   <>
    {navComp}
   </>
  )
 }

 const CheckPoint = navItem.map(({ path, name, hasChild, icon, children }, key) => <CompNav path={path} name={name} key={key} hasChild={hasChild} icon={icon} children={children} />)

 return (
  <>
   <Drawer variant="permanent" open={props.drawerOpen}>
    <DrawerHeader>
     <IconButton onClick={props.onToggleDrawer}>
      <ChevronLeftIcon />
     </IconButton>
    </DrawerHeader>
    <Divider />

    <List>

     {CheckPoint}

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
