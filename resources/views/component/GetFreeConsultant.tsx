import React from 'react'
import { Typography, Grid, Box, InputBase, Button, TextField, InputAdornment } from '@mui/material'
import { fontWeight } from '@mui/system'
import FixedContainer from './FixedContainer'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const CSS: ICss = {
 content: {
  backgroundColor: 'rgba(247, 233, 233, 0.5)',
  padding: '100px 0'
 },
 header: {
  fontSize: '48px',
  lineHeight: '56px',
  fontStyle: 'normal',
  fontWeight: '700',
  padding: '18px 0',
  textAlign: {
   xs: 'center'
  }
 },
 sendNow: {
  padding: '10px 25px'
 },
 emailAddress: {
  backgroundColor: 'white',
  height: '80px',
  width: {
   xs: '100%',
   md: '733px'
  },
  paddingLeft: {
   xs: '10px',
   md: '30px',
  },
  paddingRight: {
   xs: '5px',
   md: '10px',
  },
  borderRadius: {
   xs: '5px',
   md: '10px',
  },
  fontWeight: 'bold',
  boxShadow: '5px 4px 63px 14px rgba(0,0,0,0.10)',
  ':placeholder': {
   color: ''
  }
 }
}

/* const GetFreeConsultant = () => {
 return (
  <Box sx={CSS.content}>
   <FixedContainer>
    <Grid container justifyContent="center" alignItems="center">
     <Grid item xs={9}>
      <Grid container justifyContent="center" alignItems="center">
       <Grid item>
        <Typography sx={CSS.header}>Get Free Consultation</Typography>
       </Grid>
       <Grid item>
        <Grid container justifyContent="center" alignItems="center">
         <Grid item xs={6}>
          <Typography align="center">
           Everything has beauty, but not everyone sees it. think wrongly, if you please, but in all cases think for yourself. everytime you smile at someone, it is an action of love
          </Typography>
         </Grid>
        </Grid>
       </Grid>
       <Grid item sx={{ mt: 5 }}>
        <InputBase sx={CSS.emailAddress} fullWidth={true} placeholder="Your e-mail address" endAdornment={
         <InputAdornment position="end">
          <Button variant="contained" color="primary" sx={CSS.sendNow}>send now</Button>
         </InputAdornment>
        } />
       </Grid>
      </Grid>
     </Grid>
    </Grid>
   </FixedContainer>
  </Box>
 )
} */


const GetFreeConsultant = () => {
 return (
  <Box sx={CSS.content}>
   <FixedContainer>
    <Grid container justifyContent="center" alignItems="center">
     <Grid item xs={11} sm={9}>
      <Grid container justifyContent="center" alignItems="center">
       <Grid item>
        <Typography sx={CSS.header}>Get Free Consultation</Typography>
       </Grid>
       <Grid item>
        <Grid container justifyContent="center" alignItems="center">
         <Grid item xs={12} sm={8}>
          <Typography align="center">
           Everything has beauty, but not everyone sees it. think wrongly, if you please, but in all cases think for yourself. everytime you smile at someone, it is an action of love
          </Typography>
         </Grid>
        </Grid>
       </Grid>
       <Grid item xs={12} sx={{ mt: 5 }}>
        <InputBase sx={CSS.emailAddress} fullWidth={true} placeholder="Your e-mail address" endAdornment={
         <InputAdornment position="end">
          <Button variant="contained" color="primary" sx={CSS.sendNow}>send now</Button>
         </InputAdornment>
        } />
       </Grid>
      </Grid>
     </Grid>
    </Grid>
   </FixedContainer>
  </Box>
 )
}

export default GetFreeConsultant
