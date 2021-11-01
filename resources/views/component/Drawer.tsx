import MuiDrawer from '@mui/material/Drawer'
import Global from '../../global/index'
import { CSSObject, Theme } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

const openedMixin = (theme: Theme): CSSObject => ({
 width: Global.drawerWidth,
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

export const DrawerHeader = styled('div')(({ theme }) => ({
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'flex-end',
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop: any) => prop !== 'open' })(
 ({ theme, open }: any) => ({
  width: Global.drawerWidth,
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
