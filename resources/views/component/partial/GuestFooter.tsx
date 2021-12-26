import React from 'react'
import { Grid, Typography, Box, List, ListItem, IconButton, ListItemText, ListSubheader, Input, InputAdornment, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { borderRadius } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { red } from '@mui/material/colors'
import FixedContainer from '../FixedContainer'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const SocialMediaIconButton = styled(IconButton)({
 marginLeft: '20px',
 marginBottom: '0px',
 paddingBottom: '0px'
})

const CSS: ICss = {
 copyRight: {
  fontSize: '18px'
 },
 schedule: {
  fontSize: '12px'
 },
 subHeader: {
  color: '#E32129',
  fontSize: '18px'
 },
 subscriberText: {
  color: '#1E2833',
  fontSize: '24px',
  mb: 2
 },
 subscriberButton: {
  backgroundColor: red[500],
  borderRadius: '0',
  color: 'white',
  marginBottom: '7px',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
  ':hover': {
   backgroundColor: red[500],
  },
 },
 subscriberInput: {
  fontSize: '15px',
  fontWeight: '400',
  borderBottom: '1px solid #E5E5E5'
 },
 logo: {
  pt: 3,
  pb: 3
 },
 subscriber: {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-end',
  bgcolor: 'background.paper'
 },
 socialMedia: {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-end',
  bgcolor: 'background.paper'
 }
}

const GuestFooter = () => {
 return (
  <FixedContainer marginTop={5}>
   <Grid container justifyContent="center" sx={{ pt: 5 }}>
    <Grid item xs={12}>
     <Grid container justifyContent="space-between">
      <Grid item xs={6}>
       <Box sx={CSS.logo}>
        <img src="/storage/images/logo.png" />
       </Box>
       <Typography sx={CSS.copyRight}>Copyright © 2021. Sapphire Clinics Incorporated</Typography>
       <Typography sx={CSS.schedule}>
        <strong>Mondays to Fridays</strong> - 7:00 am to 6:00 pm<br />
        <strong>Saturdays and Sundays</strong> - 10:00 am to 6:00 pm
       </Typography>
      </Grid>
      <Grid item xs={6}>
       <Grid container alignItems="left">
        <Box>
         <List>
          <ListSubheader sx={CSS.subHeader}>Services</ListSubheader>
          <ListItem>
           <ListItemText>Physical Therapy</ListItemText>
          </ListItem>
          <ListItem>
           <ListItemText>Occupational Therapy</ListItemText>
          </ListItem>
          <ListItem>
           <ListItemText>Speech Pathology</ListItemText>
          </ListItem>
          <ListItem>
           <ListItemText>Medical Consultations</ListItemText>
          </ListItem>
         </List>
        </Box>
        <Box>
         <List>
          <ListSubheader sx={CSS.subHeader}>About</ListSubheader>
          <ListItem>
           <ListItemText>{'Mission & Vision'}</ListItemText>
          </ListItem>
          <ListItem>
           <ListItemText>Founder</ListItemText>
          </ListItem>
          <ListItem>
           <ListItemText>Consultants</ListItemText>
          </ListItem>
          <ListItem>
           <ListItemText>Careers</ListItemText>
          </ListItem>
         </List>
        </Box>
       </Grid>
      </Grid>
     </Grid>
    </Grid>
   </Grid>
   <Grid container justifyContent="center" sx={{ mb: 5 }}>
    <Grid item xs={12}>
     <Grid container justifyContent="space-between">
      <Stack sx={CSS.subscriber}>
       <Typography sx={CSS.subscriberText}>
        Subscribe to our <br />newsletter
       </Typography>
       <Input disableUnderline={true} sx={CSS.subscriberInput} placeholder="Email Address" endAdornment={
        <InputAdornment position="end">
         <IconButton sx={CSS.subscriberButton} color='primary'>
          <ChevronRight />
         </IconButton>
        </InputAdornment>
       }
       />
      </Stack>
      <Box sx={CSS.socialMedia}>
       <SocialMediaIconButton>
        <FacebookIcon />
       </SocialMediaIconButton>
       <SocialMediaIconButton>
        <TwitterIcon />
       </SocialMediaIconButton>
       <SocialMediaIconButton>
        <InstagramIcon />
       </SocialMediaIconButton>
      </Box>
     </Grid>
    </Grid>
   </Grid>
  </FixedContainer>
 )
}

export default GuestFooter
