import React from 'react'
import { Typography, Grid, Box } from '@mui/material';


interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const CSS: ICss = {
 header: {
  fontSize: "48px",
  fontWeight: "bold"
 }
}

const GetFreeConsultant = () => {
 return (
  <>
   <Box>
    <Typography sx={CSS.header}>Get Free Consultation</Typography>
   </Box>
  </>
 )
}

export default GetFreeConsultant;
