import { Typography, Grid, Button, Link, Toolbar, Stack, Box, Container, InputLabel, NativeSelect, MenuItem, TextField, Select } from '@mui/material'
import React from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/styles'
import * as SelectWithBook from '../component/SelectWithBook'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import './Home.scss'
import { fontWeight } from '@mui/system'
import Testimonials from '../component/Testimonials'
import FixedContainer from '../component/FixedContainer'
import Booking from '../component/Booking'
import * as Text from '../component/core/Text'
import { StringMappingType } from 'typescript'

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
   main: '#e32129',
  },
 },
 typography: {
  fontFamily: 'Montserrat'
 }
})

const InputSelectBook = styled(NativeSelect)({

})

const CSS: ICss = {
 wrapperFeature: {
  background: 'linear-gradient(207.89deg, #9C1D23 -153.41%, #CC1F24 -65.2%, #D11F24 -33.52%, #E74126 34.32%, #EB5D24 116.35%, #F07C23 149.48%)',
  color: 'white',
  mb: 5,
  pb: 4
 },
 wrapperBanner: {
  height: '829.94px',
  mb: 12
 },
 headerText: {
  paddingTop: '50px',
  lineHeight: '58.51px',
  fontSize: '48px'
 },
 contentText: {
  pt: 4,
  fontSize: '18px',
  lineHeight: '21.94px'
 },
 select: {
  ':focus': {
   backgroundColor: 'transparent'
  }
 },
 featureIcon: {
  width: '60px',
  height: '60px',
  mt: 7
 },
 featureHeader: {
  fontSize: '24px',
  fontWeight: 700,
  my: 2
 },
 featureContent: {
  fontSize: '18px',
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
 content?: JSX.Element,
 image?: string,
 origin?: 'left' | 'right'
}

const ServiceInfo = ({ header, content, image, origin }: IServiceInfo) => {
 const CSS: ICss = {
  header: {
   fontSize: '48px',
   lineHeight: '58.51px',
   fontWeight: 400,
   textAlign: {
    xs: 'center',
    sm: 'left'
   },
  },
  content: {
   textAlign: {
    xs: 'center',
    sm: 'left'
   },
   fontSize: '18px',
   fontWeight: 400
  },
  button: {
   maxWidth: {
    sm: '150px',
   },
   py: { sm: 1 },
   px: { sm: 2 }
  },
  wrapper: {
   my: { sm: 23 }
  },
  divider: {
   my: 2
  },
  background: {
   backgroundImage: { xs: 'none', sm: `url('/storage/images/${image}')` },
   backgroundSize: 'auto 100%',
   backgroundPosition: `${(origin === 'left') ? 'right' : 'left'}`,
   backgroundRepeat: 'no-repeat',
  }
 }

 return (
  <FixedContainer justify={origin} sx={CSS.background}>
   <Grid item sm={6}>
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
      <Button sx={CSS.button} fullWidth>Learn More</Button>
     </Box>
    </Box>
   </Grid>
  </FixedContainer>
 )
}

const RedirectToSeriousMDbtn = () => {
 const CSS: ICss = {
  button: {
   maxWidth: '200px',
   textTransform: 'capitalize'
  }
 }

 return (<Button className="button" sx={CSS.button} fullWidth variant="contained">SeriousMD</Button>)
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
      <Box sx={{ backgroundColor: '#FDFDFD' }}>
       <Container maxWidth="xl">
        {/* <img src="/storage/images/banner_image_1.png" className="banner image" height="829.94px" width="711px"/> */}
        <Grid container justifyContent="center" alignItems="center" sx={{
         backgroundImage: { xs: 'none', sm: 'url("/storage/images/banner_image_1.png"), url("/storage/images/banner_image_2.png")' },
         backgroundSize: 'auto 511px, auto 130px',
         backgroundPosition: 'right, left',
         backgroundPositionY: '60px, 600px',
         backgroundRepeat: 'no-repeat, no-repeat',
         pt: 5
        }}>
         <Grid item sm={12} md={10}>
          <Grid container justifyContent="left">
           <Grid sx={{ mb: { sm: 50 }, mt: { sm: 10 } }}>
            <Stack>
             <Box sx={{ maxWidth: '710px' }}>
              <Text.HeadOne align={{ xs: 'center', sm: 'left' }}>
               The highest standard for pediatric and adult medical consultations and rehabilitation services.
              </Text.HeadOne>
              {/* <Typography sx={CSS.headerText}></Typography> */}
             </Box>
             <Box sx={{ maxWidth: '481px', my: 2 }}>
              <Text.ParagraphCustomOne align={{ xs: 'center', sm: 'left' }}>
               As a multi-specialty clinic, Sandbox aims to provide the highest quality care and treatment to its patients and clients from different age group with different medical and rehabilitation needs.
              </Text.ParagraphCustomOne>
              {/* <Typography sx={CSS.contentText}></Typography> */}
             </Box>
             <Box>
              <div className="booknow">
               {/* <SelectWithBook.Base /> */}
               <RedirectToSeriousMDbtn />
              </div>
             </Box>
            </Stack>
           </Grid>
          </Grid>
         </Grid>
        </Grid>
       </Container>
      </Box>

      <Box sx={CSS.wrapperFeature}>
       <FixedContainer justify="center">

        <Grid item sm={4} sx={{ textAlign: 'center' }}>
         <Grid container justifyContent="center">
          <Grid item>
           <EventAvailableIcon sx={CSS.featureIcon} />
           <Typography align="center" sx={CSS.featureHeader}>Schedule Consultation</Typography>
          </Grid>
          <Grid item>
           <Box sx={{ 'maxWidth': '300px' }}>
            <Typography align="center" sx={CSS.featureContent}>Book a consultation with any of Sandbox’s directory of professional consultants.</Typography>
           </Box>
          </Grid>
         </Grid>
        </Grid>

        <Grid item sm={4} sx={{ textAlign: 'center' }}>
         <Grid container justifyContent="center">
          <Grid item>
           <LocalHospitalIcon sx={CSS.featureIcon} />
           <Typography align="center" sx={CSS.featureHeader}>Personalized Treatment</Typography>
          </Grid>
          <Grid item>
           <Box sx={{ 'maxWidth': '300px' }}>
            <Typography align="center" sx={CSS.featureContent}>Everything has beauty, but not everyone sees it. think wrongly, if you please, but in all cases</Typography>
           </Box>
          </Grid>
         </Grid>
        </Grid>

        <Grid item sm={4} sx={{ textAlign: 'center' }}>
         <Grid container justifyContent="center">
          <Grid item>
           <TagFacesIcon sx={CSS.featureIcon} />
           <Typography align="center" sx={CSS.featureHeader}>Improve Health</Typography>
          </Grid>
          <Grid item>
           <Box sx={{ 'maxWidth': '300px' }}>
            <Typography align="center" sx={CSS.featureContent}>Everything has beauty, but not everyone sees it. think wrongly, if you please, but in all cases</Typography>
           </Box>
          </Grid>
         </Grid>
        </Grid>

       </FixedContainer>
      </Box>

      <ServiceInfo
       origin="right"
       image="content_image_1.png"
       header={<>
        Physical Therapy
        Department
       </>
       }

       content={
        <>
         The Physical Therapy Department will be equipped with the
         state-of-the-art medical equipment and modalities available,
         supported by evidence.
        </>
       }
      />

      <ServiceInfo
       origin="left"
       image="content_image_2.png"
       header={<>
        Occupational Therapy
        Department
       </>
       }

       content={
        <>Sandbox Occupational Therapy Department is composed of highly qualified OT consultants, unique with their own certifications, specializations and application of various OT principles in their interventions.</>
       }
      />

      <ServiceInfo
       origin="right"
       image="content_image_3.png"
       header={<>
        Speech-Language Pathology Department
       </>
       }

       content={
        <>
         The Sandbox Clinic Speech-Language Pathology Department is guided by the best practices in the field, each Speech-Language Pathologists in Sandbox is committed to providing quality services that are catered to each individual‘s needs. We also offer specialized Speech Therapy services such as PROMPT, and Pediatric Feeding and Dysphagia Therapy.
        </>
       }
      />

      <ServiceInfo
       origin="left"
       image="content_image_4.png"
       header={<>
        Medical Department
       </>
       }

       content={
        <>
         Book a medical consultation with a licensed
         professional for all your medical consultancy
         needs and demands.
        </>
       }
      />

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

export default Home
