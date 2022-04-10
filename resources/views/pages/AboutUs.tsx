import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { Box, Typography, Stack, Grid, Button, Avatar, Chip } from '@mui/material'
import FixedContainer from '../component/FixedContainer'
import * as Text from '../component/core/Text'
import './AboutUs.scss'
import TextEllipsis from '../component/core/TextEllipsis'
import Banner from '../component/Banner'
import { styled } from '@mui/material/styles'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}
const TitlePaper = ({ title }: { title?: string }) => {
 const CSS: ICss = {
  title: {
   fontWeight: 400,
   fontSize: '32px',
   display: 'inline-block',
   paddingBottom: '20px',
   position: 'relative',
   marginBottom: '25px',
   '&::before': {
    content: '""',
    position: 'absolute',
    width: '50px',
    height: '1px',
    marginTop: '50px',
    marginLeft: '36%',
    marginRight: 'auto',
    borderBottom: '2px solid red',
    paddingBottom: '20px'
   }
  }
 }

 return (
  <Typography sx={CSS.title}>{title}</Typography>
 )
}

const AboutUsPaper = ({ title, content }: { title?: string, content?: string }) => {
 const CSS: ICss = {
  paper: {
   height: '275px',
   maxWidth: '504px',
   boxShadow: '-2px 23px 40px 0px rgba(0,0,0,0.04)',
   py: 8
  },
  content: {
   fontWeight: 'normal',
   fontStyle: 'normal',
   fontSize: '14px',
   lineHeight: '20px'
  }
 }

 return (
  <Box sx={CSS.paper}>
   <FixedContainer justify='center'>
    <TitlePaper title={title} />
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
   <Grid container justifyContent="center" sx={{ mt: 10 }} spacing={8}>
    <Grid item>
     <AboutUsPaper title={
      'The Mission'
     }
      content={
       `Sandbox is a new generation
       multi-specialty and rehabilitation clinic that focuses in providing a holistic approach to one’s health.
       It aims to provide the highest quality of consultation services in the fields rehabilitation medicine,
       orthopedics, neurology, and developmental pediatrics. As a rehabilitation clinic, it aims to provide
       the highest quality of treatment and other services to its patients using Physical Therapy,
       Occupational Therapy, and Speech Therapy, applying the most recent evidence and practice in
       rehabilitation medicine and utilizing the most advanced technology in healthcare.`
      }
     />
    </Grid>
    <Grid item>
     <AboutUsPaper title={
      'The Vision'
     }
      content={
       'Sandbox Clinic envisions to become the forefront of rehabilitation medicine and center of learning and research in the Philippines.'
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
    <Banner
     align='right'
     posy={63}
     image='aboutus_banner_image_1.png'
     content={[
      'What We Are',
      'The highest standard for pediatric and adult assessment and therapy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.'
     ]}
    />
    <MissionVision />
    <GetFreeConsultant />
   </Body>
   <Footer>
    <GuestFooter />
   </Footer>
  </GuestLayout>
 )
}

export default AboutUs
