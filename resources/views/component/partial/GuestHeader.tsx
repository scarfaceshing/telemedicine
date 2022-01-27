import React, { useState } from 'react'
import { List, ListItem, ListItemButton, ListItemText, Typography, Grid, Button, Link, Toolbar, Stack, styled, Box, Container, IconButton, Menu, MenuItem } from '@mui/material'
import { Link as RouterLink, MemoryRouter as Router, useHistory } from 'react-router-dom'
import FixContainer from '../../component/FixedContainer'
import FixedContainer from '../../component/FixedContainer'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../core/Logo'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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

const MenuList = () => {
 return (
  <List>
   <ListItem>
    <ListItemButton component={RouterLink} to="/home">
     <ListItemText sx={{ textAlign: 'center' }} primary="Home" />
    </ListItemButton>
   </ListItem>
   <ListItem>
    <ListItemButton component={RouterLink} to="/services">
     <ListItemText sx={{ textAlign: 'center' }} primary="Services" />
    </ListItemButton>
   </ListItem>
   <ListItem>
    <ListItemButton component={RouterLink} to="/aboutus">
     <ListItemText sx={{ textAlign: 'center' }} primary="About Us" />
    </ListItemButton>
   </ListItem>
   <ListItem>
    <ListItemButton component={RouterLink} to="/faqs">
     <ListItemText sx={{ textAlign: 'center' }} primary="FAQs" />
    </ListItemButton>
   </ListItem>
  </List>
 )
}

const theme = createTheme({
 palette: {
  primary: {
   main: '#e32129',
  },
 },
 typography: {
  fontFamily: 'Montserrat'
 },
 components: {
  MuiAppBar: {
   styleOverrides: {
    root: {

    }
   }
  },
  MuiButton: {
   styleOverrides: {
    root: {
     fontFamily: 'Montserrat',
     backgroundColor: '#e32129',
     color: '#ffffff',
     fontWeight: 'bold'
    }
   }
  }
 }
})

const GuestHeader = () => {
 const [collapse, setCollapse] = useState(false)

 const handleMenu = () => {
  const menu = !collapse

  setCollapse(menu)
 }

 return (
  <>
   <ThemeProvider theme={theme}>
    <Toolbar variant='dense' disableGutters={false} sx={{
     backgroundColor: '#FFFFFF'
    }}>
     <FixedContainer justify='space-between' sx={{ py: 2 }}>
      <Grid item>
       <Logo />
      </Grid>
      <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
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
      <Grid item sx={{ display: { sm: 'flex', md: 'none' } }}>
       <IconButton size="large" color="primary" onClick={handleMenu}>
        <MenuIcon fontSize="inherit" />
       </IconButton>
      </Grid>
     </FixedContainer>
    </Toolbar>
    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
     {collapse && <MenuList />}
    </Box>
   </ThemeProvider>
  </>
 )
}

export default GuestHeader
