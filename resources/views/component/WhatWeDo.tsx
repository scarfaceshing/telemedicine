import React from 'react'
import { Box, Stack, Typography, Grid } from '@mui/material'
import FixedContainer from './FixedContainer'
import * as Text from './core/Text'
import './Component.scss'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const Banner = styled(Box)({
 background: 'linear-gradient(203.28deg,  #9C1D23 -127.58%, #CC1F24 -46.55%, #D11F24 -17.45%,  #E74126 44.86%, #EB5D24 120.21%, #F07C23 150.64%)',
 width: '100%',
 color: '#ffffff'
})


const CSS: ICss = {
 banner: {
  width: '100%',
  backgroundImage: 'url("/storage/images/whatwedo_banner_image_1.png")',
  backgroundSize: 'auto',
  backgroundPositionX: 'right',
  backgroundPositionY: '40px',
  backgroundRepeat: 'no-repeat',
  py: 12
 }
}

const WhatWeDo = () => {
 return (
  <>
   <Banner>
    <FixedContainer justify='left' sx={CSS.banner}>
     <Grid item>
      <Stack>
       <Box sx={{ maxWidth: 481 }}>
        <Text.HeadThree align='left' color="secondary">
         What We Do
        </Text.HeadThree>
       </Box>
       <Box sx={{ maxWidth: 610, my: 2 }}>
        <Text.HeadOne align='left' color="secondary">
         The highest standard for pediatric
         and adult assessment
         and therapy
        </Text.HeadOne>
       </Box>
       <Box sx={{ maxWidth: 530 }}>
        <Text.ParagraphCustomOne align='left' color="secondary">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.
        </Text.ParagraphCustomOne>
       </Box>
      </Stack>
     </Grid>
    </FixedContainer>
   </Banner>
  </>
 )
}

export default WhatWeDo
