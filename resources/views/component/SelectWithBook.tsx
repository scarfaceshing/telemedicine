import React from 'react'
import { Button, MenuItem, Select, Box, Grid } from '@mui/material'
import './Component.scss'
import { fontWeight, styled } from '@mui/system'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
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
 wrapper: {
  backgroundColor: '#ffffff',
  maxWidth: '500px',
  pr: 1
 },
 button: {
  py: 2,
  px: 2,
  my: 1
 }
}

const InputSelectBook = styled((props: any) => (
 <Select IconComponent={ArrowForwardIosIcon} {...props} />
))(({ theme }) => ({
 fontSize: '18px',
 fontStyle: 'normal',
 fontWeight: 700,
 lineHeight: '28px',
 letterSpacing: '0px',
 textAlign: 'left',
 backgroundColor: 'white',
 width: (theme.breakpoints.down('xs')) ? '100%' : '240px',
 '& .MuiOutlinedInput-notchedOutline': {
  border: 'none'
 },
 '&	.MuiSelect-icon': {
  color: 'black',
  fontSize: '1.0rem'
 },
 '&	.MuiSelect-iconOpen': {
  transform: 'rotate(90deg)',
 },
 '@media (min-width: 0px)': {
  '& .MuiSelect-select': {
   width: '100%'
  }
 },
 '@media (min-width: 600px)': {
  '& .MuiSelect-select': {
   width: '240px',
  },
 }
}))

export const Base = () => {
 return (
  <Box sx={CSS.wrapper}>
   <Grid container justifyContent='space-between'>
    <Grid item xs={12} sm={7} sx={{ pt: 0.5 }}>
     <InputSelectBook value={1}>
      <MenuItem value={1}>Physical Therapy</MenuItem>
      <MenuItem value={2}>Occupational Therapy</MenuItem>
      <MenuItem value={2}>Speech Language</MenuItem>
     </InputSelectBook>
    </Grid>
    <Grid item xs={12} sm={4}>
     <Grid container direction="row" justifyContent="center" alignItems="flex-start">
      <Grid item xs={12}>
       <Button className="button" sx={CSS.button} fullWidth variant="contained">
        Book Now
       </Button>
      </Grid>
     </Grid>
    </Grid>
   </Grid>
  </Box >
 )
}
