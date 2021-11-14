import React, { FC, Children, ReactElement, ReactNode, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Toolbar, IconButton, Box } from '@mui/material'
import Navigation from '../component/core/Navigation'
import { DrawerHeader } from '../component/Drawer'
import { AppBar } from '../component/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import * as MuiConfig from '../../global/mui-config'

interface IProps {
 children: {
  header: ReactNode,
  body: ReactNode,
  footer: ReactNode
 }
}

const theme = createTheme()

const Slot: React.FC<{
 name: 'Header' | 'Content' | 'Footer';
}> = () => null;

const SystemLayout = ({ children }: { children: Array<React.ReactElement> }) => {

 const [drawerOpen, setDrawerOpen] = useState(MuiConfig.drawerOpen)
 const [drawerWidth, setDrawerWidth] = useState(MuiConfig.drawerWidth)

 const onToggleDrawer = (e: any): void => {
  let open = !drawerOpen
  setDrawerOpen(open)
 }

 const childrenArray = Children.toArray(children) as unknown as React.ReactElement[];
 const Header = childrenArray.find(child => child?.props?.name === 'Header');
 const Content = childrenArray.find(child => child?.props?.name === 'Content');
 const Footer = childrenArray.find(child => child?.props?.name === 'Footer');

 return (
  <ThemeProvider theme={theme}>
   <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={drawerOpen}>
     <Toolbar>
      <IconButton
       color="inherit"
       aria-label="open drawer"
       onClick={onToggleDrawer}
       edge="start"
       sx={{
        marginRight: '36px',
        ...(drawerOpen && { display: 'none' }),
       }}
      >
       <MenuIcon />
      </IconButton>

      {Header?.props?.children}

     </Toolbar>
    </AppBar>
    <Navigation drawerOpen={drawerOpen} drawerWidth={drawerWidth} onToggleDrawer={onToggleDrawer} />
    <main>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />

      {Content?.props?.children}

     </Box>
    </main>

    {Footer?.props?.children}

   </Box>
  </ThemeProvider>
 )
}

SystemLayout.Slot = Slot
export default SystemLayout
