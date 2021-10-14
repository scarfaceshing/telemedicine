import React, { Component, ReactElement, ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Container, AppBar, Toolbar } from '@mui/material'

interface IState {
 test?: string;
}

interface IProps {
 children?: ReactElement[];
 classes?: any;
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

class SystemLayout extends Component<IProps, IState> {

 render() {
  const { children, classes }: any = this.props
  const header = children[0]
  const body = children[1]
  const footer = children[2]

  return (
   <>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <AppBar>
      <header>
       {header ? header.props.children : null}
      </header>
     </AppBar>
     <Toolbar />
     <main>
      {body ? body.props.children : null}
     </main>
    </ThemeProvider>
   </>
  )
 }
}

export default SystemLayout;
