import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import FixedContainer from './FixedContainer'
import './Component.scss'

const WhatWeDo = () => {
 return (
  <>
   <Box className="whatwedo banner">
    <FixedContainer>
     <div className="image_1"></div>
     <Stack>
      <Box sx={{ width: 481 }}>
       <Typography className="subtitle">
        What We Do
       </Typography>
      </Box>
      <Box sx={{ width: 610, my: 2 }}>
       <Typography className="title">
        The highest standard for pediatric
        and adult assessment
        and therapy
       </Typography>
      </Box>
      <Box sx={{ width: 530 }}>
       <Typography className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.
       </Typography>
      </Box>
     </Stack>
    </FixedContainer>
   </Box>
  </>
 )
}

export default WhatWeDo
