import * as MuiConfig from '../../global/mui-config'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'

interface AppBarProps extends MuiAppBarProps {
 open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
 shouldForwardProp: (prop: any) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
 backgroundColor: 'red',
 zIndex: theme.zIndex.drawer + 1,
 transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 ...(open && {
  marginLeft: MuiConfig.drawerWidth,
  width: `calc(100% - ${MuiConfig.drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 }),
}))
