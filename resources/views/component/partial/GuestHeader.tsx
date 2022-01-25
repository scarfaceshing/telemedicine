import React from 'react'
import { Typography, Grid, Button, Link, Toolbar, Stack, styled, Box, Container, IconButton, Menu, MenuItem } from '@mui/material'
import { Link as RouterLink, MemoryRouter as Router, useHistory } from 'react-router-dom'
import FixContainer from '../../component/FixedContainer'
import FixedContainer from '../../component/FixedContainer'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../core/Logo'

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
   <Toolbar sx={{
    backgroundColor: '#FFFFFF'
   }}>
    <FixedContainer justify="space-between" sx={{ py: { md: 2 }} }>
     <Grid item sx={{ display: { xs: 'none', sm: 'flex'  } }}>
      <Logo />
     </Grid>
     <Grid item sx={{ display: { xs: 'none', sm: 'none' , md: 'flex' } }}>
      <Stack direction="row" spacing={5} mt={1}>
       <Link color="text.primary" underline="none" component={RouterLink} to="/home">
        <Typography sx={CSS.link}>home</Typography>
       </Link>
       <Link color="text.primary" underline="none" component={RouterLink} to="/services">
        <Typography sx={CSS.link}>services</Typography>
       </Link>
       <Link color="text.primary" underline="none" component={RouterLink} to="/aboutus">
        <Typography sx={CSS.link}>about us</Typography>
       </Link>
       <Link color="text.primary" underline="none" component={RouterLink} to="/careers">
        <Typography sx={CSS.link}>careers</Typography>
       </Link>
       <Link color="text.primary" underline="none" component={RouterLink} to="/faqs">
        <Typography sx={CSS.link}>FAQs</Typography>
       </Link>
      </Stack>
     </Grid>
     <Grid item sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <img src="/storage/images/logo.png" />
     </Grid>
     <Grid item sx={{ display: { sm: 'flex', md: 'none' } }}>
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
