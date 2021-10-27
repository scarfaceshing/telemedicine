import React, { Component, ReactElement, ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Toolbar, IconButton, Box } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import Navigation from '../component/core/Navigation'
import Http from '../../api/Api'
import { useHistory } from 'react-router-dom'
interface IState {
 drawerWidth: number;
 drawerOpen: boolean;
}

interface IProps {
 children?: ReactElement[];
 classes?: any;
 history?: any;
}

const theme = createTheme()

export function Header(props: any): ReactElement {
 return (
  <>{props.content}</>
 )
}

export function Footer(props: any): ReactElement {
 return (
  <>{props.content}</>
 )
}

export function Body(props: any): ReactElement {
 return (
  <>{props.content}</>
 )
}

interface AppBarProps extends MuiAppBarProps {
 open?: boolean;
}

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
 shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
 zIndex: theme.zIndex.drawer + 1,
 transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 ...(open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 }),
}));


class SystemLayout extends Component<IProps, IState> {


 constructor(props: IProps) {
  super(props);

  this.state = {
   drawerWidth: drawerWidth,
   drawerOpen: true
  }
 }

 componentDidMount() {

  /*
   Http.post('auth/check-auth', {}).then((res: any) => {
     console.log(res)
    }).then((res: any) => {
     console.log(res)
    }).catch((err: any) => {
     this.props.history.push('/login')
    })
   */

 }

 private onToggleDrawer = (e: any): void => {
  let open = !this.state.drawerOpen
  this.setState({ drawerOpen: open })
 }


 render() {
  const { children, classes }: any = this.props
  const header = children[0]
  const body = children[1]
  const footer = children[2]

  return (
   <>
    <ThemeProvider theme={theme}>
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={this.state.drawerOpen}>
       <Toolbar>
        <IconButton
         color="inherit"
         aria-label="open drawer"
         onClick={this.onToggleDrawer}
         edge="start"
         sx={{
          marginRight: '36px',
          ...(this.state.drawerOpen && { display: 'none' }),
         }}
        >
         <MenuIcon />
        </IconButton>
        <header>
         {header ? header.props.children : null}
        </header>
       </Toolbar>
      </AppBar>
      <Navigation drawerOpen={this.state.drawerOpen} drawerWidth={this.state.drawerWidth} onToggleDrawer={this.onToggleDrawer} />
      <main>
       {body ? body.props.children : null}
      </main>
      <footer>
       {footer ? footer.props.children : null}
      </footer>
     </Box>
    </ThemeProvider>
   </>
  )
 }
}

export default SystemLayout;
