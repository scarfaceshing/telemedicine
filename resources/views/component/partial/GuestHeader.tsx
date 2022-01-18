import React from 'react'
import { Typography, Grid, Button, Link, Toolbar, Stack, styled, Box, Container, IconButton, Menu, MenuItem } from '@mui/material'
import { Link as RouterLink, MemoryRouter as Router, useHistory } from 'react-router-dom'
import FixContainer from '../../component/FixedContainer'
import FixedContainer from '../../component/FixedContainer'
import MenuIcon from '@mui/icons-material/Menu'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}
const CSS: ICss = {
 link: {
  color: '#191919',
  fontWeight: '700',
  fontStyle: 'normal',
  fontSize: '18px',
  textTransform: 'capitalize',
  '&:hover': {
   color: '#E94C27'
  }
 }
}

const GuestHeader = () => {
 return (
  <>
   <Toolbar className="style-2" sx={{
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: {
     xl: '30px 0px',
    }
   }}>

    <FixedContainer justify="space-between">
     <Grid item>
      <Grid container>
       <Grid item>
        <img style={{ width: '150px', height: '50px' }} src="/storage/images/logo_with_name.png" />
       </Grid>
      </Grid>
     </Grid>
     <Grid item sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
      <Grid container sx={{ mt: 2 }} rowSpacing={{ xs: 0 }} columnSpacing={{ xs: 8, sm: 4, md: 7 }} alignItems="center">
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/home">
         <Typography sx={CSS.link} className="style-2">home</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/services">
         <Typography sx={CSS.link}>services</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/aboutus">
         <Typography sx={CSS.link}>about us</Typography>
        </Link>
       </Grid>
       {/* <Grid item>
        <Link color="text.primary" underline="none">
         <Typography sx={link}>contact</Typography>
        </Link>
       </Grid> */}
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/careers">
         <Typography sx={CSS.link}>careers</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/faqs">
         <Typography sx={CSS.link}>FAQs</Typography>
        </Link>
       </Grid>
       <Grid item>
        {/* <Button sx={{
         textTransform: 'capitalize',
         fontSize: '16px',
         lineHeight: '24px',
         padding: '8px 50px'
        }} variant="contained" component={RouterLink} to="/login" color="primary">
         Login
        </Button> */}
       </Grid>
      </Grid>
     </Grid>
     <Grid item sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}>
      <IconButton aria-label="delete" size="large" color="primary">
       <MenuIcon fontSize="inherit" />
      </IconButton>
     </Grid>
    </FixedContainer>
   </Toolbar>
  </>
 )
}

export default GuestHeader
