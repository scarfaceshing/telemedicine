import React from 'react'
import { Typography, Grid, Box, InputBase, Button, TextField, InputAdornment } from '@mui/material';
import { fontWeight } from '@mui/system';


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
  backgroundColor: "rgba(247, 233, 233, 0.5)",
  padding: "100px 0"
 },
 header: {
  fontSize: "48px",
  lineHeight: "56px",
  fontStyle: "normal",
  fontWeight: "700",
  padding: "18px 0"
 },
 sendNow: {
  padding: "10px 25px"
 },
 emailAddress: {
  backgroundColor: "white",
  height: "80px",
  width: "733px",
  paddingLeft: "30px",
  paddingRight: "10px",
  borderRadius: "10px",
  fontWeight: "bold",
  boxShadow: "5px 4px 63px 14px rgba(0,0,0,0.10)",
  ":placeholder": {
   color: ""
  }
 }
}

const GetFreeConsultant = () => {
 return (
  <Box sx={CSS.content}>
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
  </Box>
 )
}

export default GetFreeConsultant;
