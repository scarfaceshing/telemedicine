import React from 'react'
import { Typography, Grid, Button, Link, Toolbar, Stack, styled, Box, Container } from '@mui/material'
import { Link as RouterLink, MemoryRouter as Router, useHistory } from 'react-router-dom';

interface ILink {
 [key: string]: string | number
}

const link: ILink = { color: "#191919", fontWeight: "bold", fontSize: "18px", textTransform: "capitalize" }

const GuestHeader = () => {
 return (
  <>
   <Toolbar className="style-1">
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
     <Grid item xs={12}>
      <Button component={RouterLink} to="/" color="primary">
       book a session now
      </Button>
     </Grid>
    </Grid>
   </Toolbar>
   <Toolbar className="style-2" sx={{
    justifyContent: "center",
    padding: "30px 0px",
   }}>
    <Grid container justifyContent="center" alignItems="center">
     <Grid item xs={9}>
      <Grid container justifyContent="space-between" alignItems="center">
       <Grid item>
        <Grid container>
         <Grid item>
          <img style={{ width: "150px", height: "50px" }} src="/storage/images/logo_with_name.png" />
         </Grid>
        </Grid>
       </Grid>
       <Grid item>
        <Grid container rowSpacing={{ xs: 0 }} columnSpacing={{ xs: 8, sm: 4, md: 7 }} alignItems="center">
         <Grid item>
          <Link color="text.primary" underline="none">
           <Typography sx={link} className="style-2">home</Typography>
          </Link>
         </Grid>
         <Grid item>
          <Router>
           <Link color="text.primary" underline="none">
            <Typography sx={link}>services</Typography>
           </Link>
          </Router>
         </Grid>
         <Grid item>
          <Router>
           <Link color="text.primary" underline="none">
            <Typography sx={link}>about us</Typography>
           </Link>
          </Router>
         </Grid>
         <Grid item>
          <Router>
           <Link color="text.primary" underline="none">
            <Typography sx={link}>contact</Typography>
           </Link>
          </Router>
         </Grid>
         <Grid item>
          <Router>
           <Link color="text.primary" underline="none">
            <Typography sx={link}>blogs</Typography>
           </Link>
          </Router>
         </Grid>
         <Grid item>
          <Router>
           <Link color="text.primary" underline="none">
            <Typography sx={link}>FAQs</Typography>
           </Link>
          </Router>
         </Grid>
         <Grid item>
          <Button sx={{ textTransform: "capitalize" }} component={RouterLink} to="/login" color="primary">
           Login
          </Button>
         </Grid>
        </Grid>
       </Grid>
      </Grid>
     </Grid>
    </Grid>
   </Toolbar>
  </>
 )
}

export default GuestHeader;
