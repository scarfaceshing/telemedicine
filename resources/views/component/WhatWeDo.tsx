import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import FixedContainer from './FixedContainer'
import * as Text from './core/Text'
import './Component.scss'

const WhatWeDo = () => {
 return (
  <>
   <Box className="whatwedo banner">
    <FixedContainer>
     <div className="image_1"></div>
     <Stack>
      <Box sx={{ width: 481 }}>
       <Text.HeadThree align='left' color="secondary">
        What We Do
       </Text.HeadThree>
      </Box>
      <Box sx={{ width: 610, my: 2 }}>
       <Text.HeadOne align='left' color="secondary">
        The highest standard for pediatric
        and adult assessment
        and therapy
       </Text.HeadOne>
      </Box>
      <Box sx={{ width: 530 }}>
       <Text.ParagraphCustomOne align='left' color="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.
       </Text.ParagraphCustomOne>
      </Box>
     </Stack>
    </FixedContainer>
   </Box>
  </>
 )
}

export default WhatWeDo
