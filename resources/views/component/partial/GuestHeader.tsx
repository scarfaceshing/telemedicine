import React from 'react'
import { Typography, Grid, Button, Link, Toolbar, Stack, styled, Box, Container } from '@mui/material'
import { Link as RouterLink, MemoryRouter as Router, useHistory } from 'react-router-dom'
import FixContainer from '../../component/FixedContainer'
import FixedContainer from '../../component/FixedContainer'

interface ILink {
 [key: string]: string | number
}

const link: ILink = { color: '#191919', fontWeight: '700', fontStyle: 'normal', fontSize: '18px', textTransform: 'capitalize' }

const GuestHeader = () => {
 return (
  <>
   <Toolbar className="style-1">
    <FixedContainer justify="center">
     <Button component={RouterLink} to="/" color="primary">
      book a session now
     </Button>
    </FixedContainer>
   </Toolbar>
   <Toolbar className="style-2" sx={{
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: '30px 0px',
   }}>

    <FixedContainer justify="space-between">
     <Grid item>
      <Grid container>
       <Grid item>
        <img style={{ width: '150px', height: '50px' }} src="/storage/images/logo_with_name.png" />
       </Grid>
      </Grid>
     </Grid>
     <Grid item>
      <Grid container sx={{ mt: 2 }} rowSpacing={{ xs: 0 }} columnSpacing={{ xs: 8, sm: 4, md: 7 }} alignItems="center">
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/home">
         <Typography sx={link} className="style-2">home</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/services">
         <Typography sx={link}>services</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/aboutus">
         <Typography sx={link}>about us</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none">
         <Typography sx={link}>contact</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none">
         <Typography sx={link}>careers</Typography>
        </Link>
       </Grid>
       <Grid item>
        <Link color="text.primary" underline="none" component={RouterLink} to="/faqs">
         <Typography sx={link}>FAQs</Typography>
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

    </FixedContainer>
   </Toolbar>
  </>
 )
}

export default GuestHeader
