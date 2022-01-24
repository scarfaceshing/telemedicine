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
import './Test.scss'
import { fontWeight } from '@mui/system'
import Testimonials from '../component/Testimonials'
import FixedContainer from '../component/FixedContainer'
import Booking from '../component/Booking'
import * as Text from '../component/core/Text'

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
  color: 'white'
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
 content?: JSX.Element
}

const ServiceInfo = ({ header, content }: IServiceInfo) => {
 const CSS: ICss = {
  header: {
   fontSize: '48px',
   lineHeight: '58.51px',
   fontWeight: 400
  },
  content: {
   fontSize: '18px',
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

class Test extends React.Component {

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
        <Grid container justifyContent="center" alignItems="center" className="wrapper-banner">
         <Grid item xs={10}>
          <Grid container justifyContent="left">
           <Grid sx={{ mb: { sm: 50 }, mt: 10 }}>
            <Stack>
             <Box sx={{ maxWidth: '710px' }}>
              <Text.HeadOne align="left">
               The highest standard for pediatric and adult medical consultations and rehabilitation services.
              </Text.HeadOne>
              {/* <Typography sx={CSS.headerText}></Typography> */}
             </Box>
             <Box sx={{ maxWidth: '481px', my: 2 }}>
              <Text.ParagraphCustomOne align='left'>
               As a multi-specialty clinic, Sandbox aims to provide the highest quality care and treatment to its patients and clients from different age group with different medical and rehabilitation needs.
              </Text.ParagraphCustomOne>
              {/* <Typography sx={CSS.contentText}></Typography> */}
             </Box>
             <Box>
              <div className="booknow">
               <SelectWithBook />
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

        <Grid item xs sx={{ textAlign: 'center', mb: { sm: 8 } }} rowSpacing={{ sm: 2 }}>
         <EventAvailableIcon sx={CSS.featureIcon} />
         <Typography align="center" sx={CSS.featureHeader}>Schedule Consultation</Typography>
         <Typography align="center" sx={CSS.featureContent}>Book a consultation with any of Sandbox’s directory of professional consultants.</Typography>
        </Grid>

        <Grid item xs sx={{ textAlign: 'center' }}>
         <LocalHospitalIcon sx={CSS.featureIcon} />
         <Typography align="center" sx={CSS.featureHeader}>Personalized Treatment</Typography>
         <Typography align="center" sx={CSS.featureContent}>Everything has beauty, but not<br /> everyone sees it. think wrongly,<br /> if you please, but in all cases</Typography>
        </Grid>

        <Grid item xs sx={{ textAlign: 'center' }}>
         <TagFacesIcon sx={CSS.featureIcon} />
         <Typography align="center" sx={CSS.featureHeader}>Improve Health</Typography>
         <Typography align="center" sx={CSS.featureContent}>Everything has beauty, but not<br />everyone sees it. think wrongly,<br /> if you please, but in all cases</Typography>
        </Grid>

       </FixedContainer>
      </Box>

     </Body>
     <Footer>
      <GuestFooter />
     </Footer>
    </GuestLayout >
   </>
  )
 }
}

export default Test
