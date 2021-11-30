import { Typography, Grid, Button, Link, Toolbar, Stack, Box, Container, InputLabel, NativeSelect, MenuItem, TextField } from '@mui/material'
import React from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/styles'
import SelectWithBook from '../component/SelectWithBook'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import "./Home.scss"
import { fontWeight } from '@mui/system'
import Testimonials from '../component/Testimonials'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const theme = createTheme({
 palette: {
  primary: {
   main: "#e32129",
  },
 },
 typography: {
  fontFamily: 'Montserrat'
 }
});

const InputSelectBook = styled(NativeSelect)({

})

const CSS: ICss = {
 wrapperFeature: {
  background: "linear-gradient(207.89deg, #9C1D23 -153.41%, #CC1F24 -65.2%, #D11F24 -33.52%, #E74126 34.32%, #EB5D24 116.35%, #F07C23 149.48%)",
  color: "white"
 },
 wrapperBanner: {
  backgroundColor: "#FDFDFD",
  height: "829.94px",
  mb: 12
 },
 headerText: {
  paddingTop: "50px",
  lineHeight: "58.51px",
  fontSize: "48px"
 },
 contentText: {
  pt: 4,
  fontSize: "18px",
  lineHeight: "21.94px"
 },
 select: {
  ":focus": {
   backgroundColor: "transparent"
  }
 },
 featureIcon: {
  width: "60px",
  height: "60px",
  mt: 7
 },
 featureHeader: {
  fontSize: "24px",
  fontWeight: 700,
  my: 2
 },
 featureContent: {
  fontSize: "18px",
  fontWeight: 400,
  my: 2
 },
 button: {
  fontWeight: 700,
  py: 1,
  px: 5
 }
}

interface IServiceInfo {
 header?: JSX.Element,
 content?: JSX.Element
}

const ServiceInfo = ({ header, content }: IServiceInfo) => {
 const CSS: ICss = {
  header: {
   fontSize: "48px",
   lineHeight: "58.51px",
   fontWeight: 400
  },
  content: {
   fontSize: "18px",
   fontWeight: 400
  },
  button: {
   py: 1,
   px: 2
  },
  wrapper: {
   my: 23
  },
  divider: {
   my: 2
  }
 }

 return (
  <Box sx={CSS.wrapper}>
   <Box sx={CSS.divider}>
    <Typography sx={CSS.header}>
     {header}
    </Typography>
   </Box>
   <Box sx={CSS.divider}>
    <Typography sx={CSS.content}>
     {content}
    </Typography>
   </Box>
   <Box sx={CSS.divider}>
    <Button sx={CSS.button}>Learn More</Button>
   </Box>
  </Box>
 )
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
      <div className="wrapper-banner-image-1">
       <img className="image-1" src="/storage/images/banner_image_1.png" />
      </div>
      <div className="wrapper-banner-image-2">
       <img className="image-2" src="/storage/images/banner_image_2.png" />
      </div>
      <Box sx={CSS.wrapperBanner}>
       <Grid container>
        <Grid item sx={{ ml: 12, mt: 12 }}>
         <Stack>
          <div className='header'>
           <Typography sx={CSS.headerText}>
            The highest standard for<br />
            pediatric and adult<br />
            assessment and therapy
           </Typography>
          </div>
          <div className="content">
           <Typography sx={CSS.contentText}>
            As a rehabilitation clinic, Sandbox aims to provide<br />
            the highest quality of treatment and other services<br />
            to its patients.
           </Typography>
          </div>
          <div className="booknow">
           <SelectWithBook />
          </div>
         </Stack>
        </Grid>
       </Grid>
      </Box>
      <Box sx={CSS.wrapperFeature}>
       <Grid container justifyContent="center">

        <Grid item xs={8}>
         <Grid container>

          <Grid item xs sx={{ textAlign: "center", mb: 8 }} rowSpacing={{ xs: 2 }}>
           <EventAvailableIcon sx={CSS.featureIcon} />
           <Typography align="center" sx={CSS.featureHeader}>Schedule Consultation</Typography>
           <Typography align="center" sx={CSS.featureContent}>Book a consultation with any of Sandbox’s directory of professional consultants.</Typography>
          </Grid>

          <Grid item xs sx={{ textAlign: "center" }}>
           <LocalHospitalIcon sx={CSS.featureIcon} />
           <Typography align="center" sx={CSS.featureHeader}>Personalized Treatment</Typography>
           <Typography align="center" sx={CSS.featureContent}>Everything has beauty, but not everyone sees it. think wrongly, if you please, but in all cases</Typography>
          </Grid>

          <Grid item xs sx={{ textAlign: "center" }}>
           <TagFacesIcon sx={CSS.featureIcon} />
           <Typography align="center" sx={CSS.featureHeader}>Improve Health</Typography>
           <Typography align="center" sx={CSS.featureContent}>Everything has beauty, but not everyone sees it. think wrongly, if you please, but in all cases</Typography>
          </Grid>

         </Grid>
        </Grid>

       </Grid>
      </Box>

      <Container sx={{ marginBottom: "200px" }}>
       <img src="/storage/images/content_image_1.png" className="content-image image-1 left" />
       <Grid container justifyContent="right">
        <Grid item xs={6}>
         <ServiceInfo
          header={<>
           Physical Therapy<br />
           Department
          </>
          }

          content={
           <>
            The Physical Therapy Department will be<br />equipped with the
            state-of-the-art medical<br />equipment and modalities available,<br />
            supported by evidence.
           </>
          }
         />
        </Grid>
       </Grid>

       <img src="/storage/images/content_image_2.png" className="content-image image-2 right" />
       <Grid container justifyContent="left">
        <Grid item xs={6}>
         <ServiceInfo
          header={<>
           Occupational Therapy <br />
           Department
          </>
          }

          content={
           <>
            The Occupational Therapy Department will be<br />
            composed of highly qualified therapists, unique<br />
            with their own certifications or specializations
           </>
          }
         />
        </Grid>
       </Grid>

       <img src="/storage/images/content_image_3.png" className="content-image image-3 left" />
       <Grid container justifyContent="right">
        <Grid item xs={6}>
         <ServiceInfo
          header={<>
           Speech Language<br />
           Department
          </>
          }

          content={
           <>
            Speech-Language Pathology, or Speech Therapy<br />
            is a developing practice in the country. Guided by<br />
            the best practices, each speech-language<br />
            pathologist is committed to providing<br />
            quality services that are catered to each individual‘s needs and strengths.
           </>
          }
         />
        </Grid>
       </Grid>

       <img src="/storage/images/content_image_4.png" className="content-image image-4 right" />
       <Grid container justifyContent="left">
        <Grid item xs={6}>
         <ServiceInfo
          header={<>
           Medical Department
          </>
          }

          content={
           <>
            Book a medical consultation with a licensed<br />
            professional for all your medical consultancy<br />
            needs and demands.
           </>
          }
         />
        </Grid>
       </Grid>
      </Container>
     
     <Testimonials />

     <img style={{ position: 'absolute', right: '100px', marginTop: '50px' }} src="/storage/images/meetdoctor_image_1.png" />
     <Box sx={{ py: 30, color: '#ffffff', background: 'linear-gradient(207.89deg, #9C1D23 -153.41%, #CC1F24 -65.2%, #D11F24 -33.52%, #E74126 34.32%, #EB5D24 116.35%, #F07C23 149.48%)' }}>
     <Grid container justifyContent="center">
        <Grid item xs={9}>
         <Grid container justifyContent="left">
             <Grid item xs={6}>
          <Typography sx={{ fontWeight: '400', fontSize: '48px', fontStyle: 'normal', mb: 5 }}>
            The Sandbox App
          </Typography>
          <Typography sx={{ fontWeight: '400', fontSize: '18px', fontStyle: 'normal', lineHeight:'21.94px'}}>
          Sapphire Clinics Incorporated (SCI) has been continuously gaining ground since its incorporation
in May 2021. As SCI has already laid down the foundation for the establishment of its first world-class clinic, it
sets its sights to new opportunities which are consistent with its vision to become the forefront of rehabilitation medicine in the Philippines.
          </Typography>
          <Button sx={{ mt: 5, fontWeight: 700, py: 1, px: 3, backgroundColor: '#ffffff', color: '#e32129', ":hover": {backgroundColor: '#ffffff'} }}>
              Book now
          </Button>
          </Grid>
          </Grid>
          </Grid>
          </Grid>
    </Box>

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
