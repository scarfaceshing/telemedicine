import { Typography, Grid, Button, Link, Toolbar, Stack, styled, Box, Container } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import "./Index.scss"

class Index extends React.Component {

 render() {

  return (
   <>
    <GuestLayout>
     <Header>
      <GuestHeader />
     </Header>

     <Body>
      <Grid container justifyContent="center" alignItems="center">
       <Grid item xs={9}>
        <Grid container justifyContent="space-between" alignItems="center">
         <Grid item>
          <h1>The highest standard for pediatric
           and adult assessment
           and therapy</h1>
         </Grid>
        </Grid>
       </Grid>
       <GetFreeConsultant />
      </Grid>
     </Body>

     <Footer>
      <GuestFooter />
     </Footer>
    </GuestLayout >
   </>
  )
 }
}

export default Index;
