import React from 'react'
import { Container, Grid, Typography, Box, Paper, Tabs, Tab } from '@mui/material'
import { styled } from '@mui/styles'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const CSS: ICss = {
 testimonialHeader: {
  fontSize: '48px'
 },
 testimonialContent: {
  fontSize: '18px'
 },
 wrapperPhoto: {
  backgroundColor: '#C4C4C4',
 },
 wrapperMessage: {
  backgroundColor: '#FBF4F4'
 },
 hygiene: {
  position: 'absolute'
 }
}

const FramePhoto = styled(Paper)({
 borderRadius: '50px'
})

const WrapperMessage = styled(Paper)({
 marginTop: '80px',
 padding: '40px 80px',
 borderRadius: '0 50px 50px 0px'
})

const Photo = () => {
 return (
  <>
   <FramePhoto sx={CSS.wrapperPhoto} elevation={0}>
    <Box sx={{ height: '454px' }}></Box>
   </FramePhoto>
  </>
 )
}

const Message = () => {
 return (
  <WrapperMessage sx={CSS.wrapperMessage} elevation={0}>
   <Typography sx={{ fontSize: '24px', fontWeight: '400' }}>Dr. Maria Santiago</Typography>
   <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>PhD, M.D.</Typography>
   <Typography sx={{ fontSize: '18px', fontWeight: '400', fontStyle: 'normal', lineHeight: '21.94px', mt: 3 }}>
    "The Physical Therapy Department will be equipped with the
    state-of-the-art medical equipment and modalities available,
    supported by evidence, as adjunct to or as supplement to the
    therapeutic exercises and interventions to address the
    underlying conditions of the patients."
   </Typography>
  </WrapperMessage>
 )
}

const PageTab = styled(Tab)({
 margin: '0px',
 padding: '0px'
})


const Testimonials: React.FC = () => {
 return (
  <>
   <Container>
    <Grid container justifyContent="center">
     <Grid item xs={7}>
      <Grid container justifyContent="center">
       <Grid item>
        <Typography sx={CSS.testimonialHeader}>
         Testimonials
        </Typography>
       </Grid>
       <Grid item>
        <Typography sx={CSS.testimonialContent} align="center">
         Everything has beauty, but not everyone sees it. think wrongly, if you please, but in all cases think for yourself. everytime you smile at someone, it is an action of love
        </Typography>
       </Grid>
      </Grid>
     </Grid>
    </Grid>
    {/* <img style={CSS.hygiene} src="/storage/images/routine_hygiene.png" /> */}
    <Grid container justifyContent="center" sx={{ mt: 13 }}>
     <Grid item xs={12}>
      <Grid container>
       <Grid item xs={6}>
        <Photo />
       </Grid>
       <Grid item xs={6}>
        <Message />
       </Grid>
      </Grid>
     </Grid>
    </Grid>

    <Grid container justifyContent="center" sx={{ mt: 5 }}>
     <Grid item>
      <Tabs>

      </Tabs>
     </Grid>
    </Grid>
   </Container>
  </>
 )
}

export default Testimonials
