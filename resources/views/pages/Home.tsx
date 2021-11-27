import { Typography, Grid, Button, Link, Toolbar, Stack, Box, Container, InputLabel, NativeSelect, MenuItem } from '@mui/material'
import React from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { styled } from '@mui/styles'
import "./Home.scss"

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const InputSelectBook = styled(NativeSelect)({

})

const CSS: ICss = {
 headerText: {
  lineHeight: "58.51px",
  fontSize: "48px"
 },
 contentText: {
  fontSize: "18px",
  lineHeight: "21.94px"
 }
}

class Home extends React.Component {

 render() {

  return (
   <>
    <GuestLayout>
     <Header>
      <GuestHeader />
     </Header>

     <Body>
      <Container>
       <Grid container>
        <Grid item xs={7}>
         <Stack>
          <div className='section-1-header'>
           <Typography sx={CSS.headerText}>
            The highest standard for
            pediatric and adult
            assessment and therapy
           </Typography>
          </div>
          <div className="section-1-content">
           <Typography sx={CSS.contentText}>
            As a rehabilitation clinic, Sandbox aims to provide the
            highest quality of treatment and other services
            to its patients.
           </Typography>
          </div>
          <div className="section-1-booknow">
           <InputSelectBook placeholder="Physical Therapy" disableUnderline={true}>
            <option>Occupational Therapy</option>
            <option>Speech Language</option>
           </InputSelectBook>
          </div>
         </Stack>
        </Grid>
       </Grid>
      </Container>
      <GetFreeConsultant />
     </Body>
     <Footer>
      <GuestFooter />
     </Footer>
    </GuestLayout >
   </>
  )
 }
}

export default Home;
