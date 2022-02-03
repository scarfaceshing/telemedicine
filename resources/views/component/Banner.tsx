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

const StyledBanner = styled(Box)({
 background: 'linear-gradient(203.28deg,  #9C1D23 -127.58%, #CC1F24 -46.55%, #D11F24 -17.45%,  #E74126 44.86%, #EB5D24 120.21%, #F07C23 150.64%)',
 width: '100%',
 color: '#ffffff'
})


interface IProps {
 content?: any,
 image?: string,
 align?: string,
 posy?: number
}

const Banner = ({ content, image, align, posy }: IProps) => {

 const CSS: ICss = {
  banner: {
   width: '100%',
   backgroundImage: `url('/storage/images/${image}')`,
   backgroundSize: 'auto',
   backgroundPositionX: `${(align === 'left') ? 'right' : 'left'}`,
   backgroundPositionY: `${posy}px`,
   backgroundRepeat: 'no-repeat',
   height: '554px',
   py: 12
  }
 }

 return (
  <>
   <StyledBanner>
    <FixedContainer justify={align} sx={CSS.banner}>
     <Grid item>
      <Stack>
       <Box sx={{ maxWidth: 481 }}>
        <Text.HeadThree align='left' color="secondary">
         {content[0]}
        </Text.HeadThree>
       </Box>
       <Box sx={{ maxWidth: 610, my: 2 }}>
        <Text.HeadOne align='left' color="secondary">
         {content[1]}
        </Text.HeadOne>
       </Box>
       <Box sx={{ maxWidth: 530 }}>
        <Text.ParagraphCustomOne align='left' color="secondary">
         {content[2]}
        </Text.ParagraphCustomOne>
       </Box>
      </Stack>
     </Grid>
    </FixedContainer>
   </StyledBanner>
  </>
 )
}

export default Banner
