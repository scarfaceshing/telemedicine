import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import { Box, Typography, Grid, Stack } from '@mui/material'
import FixedContainer from '../component/FixedContainer'
import * as Text from '../component/core/Text'
import './Careers.scss'

interface ICssObject {
	[key: string]: string | number
}
interface ICss {
	[key: string]: {
		[key: string]: string | number | ICssObject
	}
}

const Banner = () => {
 const CSS: ICss = {
  wrapper: {
   background: 'linear-gradient(203.28deg, #9C1D23 -127.58%, #CC1F24 -46.55%, #D11F24 -17.45%, #E74126 44.86%, #EB5D24 120.21%, #F07C23 150.64%);',
   height: '554px'
  }
 }

 return (
  <>
   <Box sx={CSS.wrapper}>
    <FixedContainer>
     <div className="careers_banner_image_1"></div>
     <Grid container>
      <Grid item sx={{my: 10}}>
       <Stack>
        <Box sx={{my: 4}}>
         <Text.HeadOne color="secondary" align="left">Come join Us!</Text.HeadOne>
        </Box>
        <Box sx={{ width: '480px'}}>
         <Text.HeadContent color="secondary" align='left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.</Text.HeadContent>
        </Box>
        <Box>
            
        </Box>
       </Stack>
      </Grid>
     </Grid>
    </FixedContainer>
   </Box>
  </>
 )
}

const Careers: FC = () => {
 return (
  <GuestLayout>
   <Header>
    <GuestHeader />
   </Header>
   <Body>
    <Banner />
   </Body>
   <Footer>
    <GuestFooter />
   </Footer>
  </GuestLayout>
 )
}

export default Careers
