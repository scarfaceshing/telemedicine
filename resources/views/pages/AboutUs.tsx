import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { Box, Typography, Stack, Grid } from '@mui/material'
import FixedContainer from '../component/FixedContainer'
import "./AboutUs.scss"

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const Banner = () => {
 const CSS: ICss = {
  wrapper: {
   background: 'linear-gradient(203.28deg, #9C1D23 -127.58%, #CC1F24 -46.55%, #D11F24 -17.45%, #E74126 44.86%, #EB5D24 120.21%, #F07C23 150.64%)',
   color: "#ffffff",
   py: 12
  },
  subtitle: {
   fontWeight: 400,
   fontStyle: "normal",
   fontSize: "24px",
   lineHeight: "36px"
  },
  title: {
   fontWeight: 400,
   fontStyle: "normal",
   fontSize: "48px",
   lineHeight: "58.51px"
  }
 }

 return (
  <Box sx={CSS.wrapper} className="about_us">
   <FixedContainer justify='left'>
    <div className='banner_image'></div>
    <Grid container justifyContent="right">
     <Stack>
      <Box sx={{ width: 481 }}>
       <Typography sx={CSS.subtitle}>
        What We Are
       </Typography>
      </Box>
      <Box sx={{ width: 610, my: 2 }}>
       <Typography sx={CSS.title}>
        The highest standard for pediatric
        and adult assessment
        and therapy
       </Typography>
      </Box>
      <Box sx={{ width: 530 }}>
       <Typography className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.
       </Typography>
      </Box>
     </Stack>
    </Grid>
   </FixedContainer>
  </Box>
 )
}

const AboutUsPaper = ({ title, content }: { title?: string, content?: string }) => {
 const CSS: ICss = {
  paper: {
   boxShadow: "-2px 23px 40px 0px rgba(0,0,0,0.07)",
   my: 8,
   py: 8
  },
  title: {
   fontWeight: 400,
   fontStyle: "normal",
   fontSize: "48px",
   lineHeight: "58.51px",
   ":before": {
    content: '',
    position: "absolute",
    width: "50%",
    height: "1px",
    bottom: "0",
    left: "25%",
    borderBottom: "1px solid red"
   }
  },
  content: {
   fontWeight: 'normal',
   fontStyle: "normal",
   fontSize: "14px",
   lineHeight: "20px"
  }
 }

 return (
  <Box sx={CSS.paper}>
   <FixedContainer justify='center'>
    <Typography sx={CSS.title}>{title}</Typography>
    <Typography sx={CSS.content} align='center'>
     {content}
    </Typography>
   </FixedContainer>
  </Box>
 )
}

const MissionVision = () => {

 return (
  <FixedContainer justify='center'>
   <Grid container justifyContent="center" columnSpacing={8}>
    <Grid item xs={6}>
     <AboutUsPaper title={
      `The Mission`
     }
      content={
       `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque pellentesque elit nec volutpat nunc sed elit. In tempor at cursus pharetra elementum ante.`
      }
     />
    </Grid>
    <Grid item xs={6}>
     <AboutUsPaper title={
      `The Vision`
     }
      content={
       `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque pellentesque elit nec volutpat nunc sed elit. In tempor at cursus pharetra elementum ante.`
      }
     />
    </Grid>
   </Grid>
  </FixedContainer>
 )
}

const AboutUs: FC = () => {
 return (
  <GuestLayout>
   <Header>
    <GuestHeader />
   </Header>
   <Body>
    <Banner />
    <MissionVision />
    <GetFreeConsultant />
   </Body>
   <Footer>
    <GuestFooter />
   </Footer>
  </GuestLayout>
 )
}

export default AboutUs;
