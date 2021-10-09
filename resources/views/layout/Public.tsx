
import React, { Component, ReactElement, ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AppBar, CssBaseline } from '@mui/material'
import { green, purple, red } from '@mui/material/colors'
import "@fontsource/montserrat/400.css"
import { fontWeight } from '@mui/system'
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const theme = createTheme({
 typography: {
  fontFamily: 'Montserrat'
 },
 components: {
  MuiAppBar: {
   styleOverrides: {
    root: {

    }
   }
  },
  MuiButton: {
   styleOverrides: {
    root: {
     fontFamily: 'Montserrat',
     backgroundColor: "#e32129",
     color: "#ffffff",
     fontWeight: "bold",
     fontSize: "16px",
     lineHeight: "24px",
     padding: "8px 50px"
    }
   }
  }
 }
});

function ElevationScroll(props: any) {
 const { children, window } = props;
 // Note that you normally won't need to set the window ref as useScrollTrigger
 // will default to window.
 // This is only being set here because the demo is in an iframe.
 const trigger = useScrollTrigger({
  disableHysteresis: true,
  threshold: 0,
  target: window ? window() : undefined,
 });

 return React.cloneElement(children, {
  elevation: trigger ? 4 : 0,
 });
}

ElevationScroll.propTypes = {
 children: PropTypes.element.isRequired,
 /**
  * Injected by the documentation to work in an iframe.
  * You won't need it on your project.
  */
 window: PropTypes.func,
};

interface IState {
 test?: string;
}

interface IProps {
 children?: ReactElement[];
 classes?: any;
}

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

class PublicLayout extends Component<IProps, IState> {

 constructor(props: IProps) {
  super(props)

  this.state = {
   test: 'helo'
  }
 }

 render() {
  const { children, classes }: any = this.props
  //   const header = children.find((child: any) => child.type === Header)
  //   const body = children.find((child: any) => child.type === Body)
  //   const footer = children.find((child: any) => child.type === Footer)

  const header = children[0]
  const body = children[1]
  const footer = children[2]

  console.log(header)

  return (
   <>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <ElevationScroll {...this.props}>
      <AppBar>
       <header>
        {header ? header.props.children : null}
       </header>
      </AppBar>
     </ElevationScroll>
     <main>
      {body ? body.props.children : null}
     </main>
     <footer>
      {footer ? footer.props.children : null}
     </footer>
    </ThemeProvider>
   </>
  )
 }
}

export default PublicLayout;
