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

     <ListItem button component={Link} to={"/admin/dashboard"}>
      <ListItemIcon>
       <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={'Dashboard'} />
     </ListItem>

     <Divider />

     <ListItem button onClick={collapseClick}>
      <ListItemIcon>
       <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="User Management " />
      {openNav ? <ExpandLess /> : <ExpandMore />}
     </ListItem>

     <Collapse in={openNav} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
       <ListItem sx={{ pl: 2 }} button component={Link} to="/admin/change-password">
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText>
         Change password
        </ListItemText>
       </ListItem>
      </List>
     </Collapse>

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
