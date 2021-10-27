import React, { Component } from 'react'
import SystemLayout, { Header, Body, Footer } from '../../layout/System'
import { styled, useTheme } from '@mui/material/styles'
import { Typography, Box, Alert } from '@mui/material'

interface IProps {

}

interface IState {
}

const DrawerHeader = styled('div')(({ theme }) => ({
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'flex-end',
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
}));


export class Dashboard extends Component<IProps, IState> {

 constructor(props: IProps) {
  super(props)

  console.log("Dashboard")
 }


 render() {
  return (
   <SystemLayout>
    <Header>
     <Typography>
      Sandbox - Telemedicine App
     </Typography>
    </Header>
    <Body>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Alert severity="error">This is page not available for now.. :D </Alert>
     </Box>
    </Body>
    <Footer>
    </Footer>
   </SystemLayout>
  )
 }
}

export default Dashboard