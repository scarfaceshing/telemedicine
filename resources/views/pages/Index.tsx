import { Typography, Grid, Button, Link, Toolbar, Stack, styled, Box } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'
import PublicLayout, { Header, Body, Footer } from '../layout/Public'
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import "./Index.scss"

interface ILink {
 [key: string]: string | number
}

const link: ILink = { color: "#191919", fontWeight: "bold", fontSize: "18px", textTransform: "capitalize" }

class Index extends React.Component {

 render() {

  return (
   <>
    <PublicLayout>
     <Header>
      <Toolbar className="style-1">
       <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12}>
         <Router>
          <Button component={RouterLink} to="/" color="primary">
           book a session now
          </Button>
         </Router>
        </Grid>
       </Grid>
      </Toolbar>
      <Toolbar className="style-2" sx={{
       justifyContent: "center"
      }}>
       <Stack spacing={8} direction="row" alignItems="center" justifyContent="center">
        <div><img src="/storage/images/logo.png" /></div>
        <div>
         <Router>
          <Link color="text.primary" underline="none">
           <Typography sx={link} className="style-2">home</Typography>
          </Link>
         </Router>
        </div>
        <div>
         <Router>
          <Link color="text.primary" underline="none">
           <Typography sx={link}>services</Typography>
          </Link>
         </Router>
        </div>
        <div>
         <Router>
          <Link color="text.primary" underline="none">
           <Typography sx={link}>about us</Typography>
          </Link>
         </Router>
        </div>
        <div>
         <Router>
          <Link color="text.primary" underline="none">
           <Typography sx={link}>contact</Typography>
          </Link>
         </Router>
        </div>
        <div>
         <Router>
          <Link color="text.primary" underline="none">
           <Typography sx={link}>blogs</Typography>
          </Link>
         </Router>
        </div>
        <div>
         <Router>
          <Link color="text.primary" underline="none">
           <Typography sx={link}>FAQs</Typography>
          </Link>
         </Router>
        </div>
        <div>
         <Router>
          <Button sx={{ textTransform: "capitalize" }} component={RouterLink} to="/" color="primary">
           Login
          </Button>
         </Router>
        </div>
       </Stack>
      </Toolbar>
     </Header>

     <Body>
      <Box sx={{ my: 2 }}>
       {[...new Array(12)]
        .map(
         () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')}
      </Box>
     </Body>

     <Footer>
      <h1>Footer</h1>
     </Footer>
    </PublicLayout >
   </>
  )
 }
}

export default Index;
