import React, { Component } from 'react'
import { Theme, CSSObject, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Collapse, ListItemButton } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Http from '../../../api/Api'
import { useLocation, Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MuiDrawer from '@mui/material/Drawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import PersonIcon from '@mui/icons-material/Person'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'

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

const drawerWidth = 250;

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

export class Navigation extends Component<IProps, IState> {

 constructor(props: IProps) {
  super(props)

  this.state = {
   openNav: false
  }
 }

 private getUser = (): void => {
  Http.get('auth/data/user', {}).then((res: any) => {
   console.log(res.data);
  })
 }

 private getUserInfo = (): void => {
  Http.get('auth/me', {}).then((res) => {
   console.log(res);
  })
 }

 private logout = (): void => {
  Http.post('auth/logout', {}).then((res) => {
  })

  this.props.history.push('/');
 }

 private collapseClick = (event: any): void => {
  const open = !this.state.openNav
  this.setState({ openNav: open })

 }

 render() {

  /*  const NavComponent = NavItem.map(({ path, name, icon }, key) =>
    <ListItem button key={key} component={Link} to={path}>
     <ListItemIcon>{icon}</ListItemIcon>
     <ListItemText primary={name} />
    </ListItem>) */

  return (
   <>
    <Drawer variant="permanent" open={this.props.drawerOpen}>
     <DrawerHeader>
      <IconButton onClick={this.props.onToggleDrawer}>
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

      <ListItem button onClick={this.collapseClick}>
       <ListItemIcon>
        <PersonIcon />
       </ListItemIcon>
       <ListItemText primary="User Management " />
       {this.state.openNav ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={this.state.openNav} timeout="auto" unmountOnExit>
       <List component="div" disablePadding>
        <ListItem sx={{ pl: 2 }} button component={Link} to="/admin/change-password">
         <ListItemIcon>
         </ListItemIcon>
         <ListItemText primary="Change password" />
        </ListItem>
       </List>
      </Collapse>

      <ListItem button onClick={this.logout}>
       <ListItemIcon>
        <LogoutIcon />
       </ListItemIcon>
       <ListItemText primary={'Logout'} />
      </ListItem>
     </List>
    </Drawer>
   </>
  )
 }
}

export default Navigation
