import { Typography, Grid, Button, Link, Toolbar, Stack, Box, Container, InputLabel, NativeSelect, MenuItem, TextField } from '@mui/material'
import React from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/styles'
import SelectWithBook from '../component/SelectWithBook'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import "./Home.scss"

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
       <ThemeProvider theme={theme}>
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
       </ThemeProvider>
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
