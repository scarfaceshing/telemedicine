import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import FixedContainer from './FixedContainer'

const Booking = () => {
 return (
  <>
   <Box sx={{ py: 30, color: '#ffffff', background: 'linear-gradient(207.89deg, #9C1D23 -153.41%, #CC1F24 -65.2%, #D11F24 -33.52%, #E74126 34.32%, #EB5D24 116.35%, #F07C23 149.48%)' }}>
    <FixedContainer justify='left'>
     <img style={{ position: 'absolute', marginLeft: "600px", marginTop: "-150px" }} src="/storage/images/meetdoctor_image_1.png" />
     <Grid item xs={6}>
      <Typography sx={{ fontWeight: '400', fontSize: '48px', fontStyle: 'normal', mb: 5 }}>
       The Sandbox App
      </Typography>
      <Typography sx={{ fontWeight: '400', fontSize: '18px', fontStyle: 'normal', lineHeight: '21.94px' }}>
       <Box sx={{ width: "465px" }}>
        Sapphire Clinics Incorporated (SCI) has been continuously gaining ground since its incorporation in May 2021. As SCI has already laid down the foundation for the establishment of its first world-class clinic, it sets its sights to new opportunities which are consistent with its vision to become the forefront of rehabilitation medicine in the Philippines.
       </Box>
      </Typography>
      <Button sx={{ mt: 5, fontWeight: 700, py: 1, px: 3, backgroundColor: '#ffffff', color: '#e32129', ':hover': { backgroundColor: '#ffffff' } }}>
       Book now
      </Button>
     </Grid>
    </FixedContainer>
   </Box>
  </>
 )
}

export default Booking;