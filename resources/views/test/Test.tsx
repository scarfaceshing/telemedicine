import { Typography, Grid, Button, Link, Toolbar, Stack, Box, Container, InputLabel, NativeSelect, MenuItem, TextField, Select } from '@mui/material'
import React from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/styles'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import './Test.scss'
import { fontWeight } from '@mui/system'
import Testimonials from '../component/Testimonials'
import FixedContainer from '../component/FixedContainer'
import Booking from '../component/Booking'
import * as Text from '../component/core/Text'
import { StringMappingType } from 'typescript'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const theme = createTheme({
 palette: {
  primary: {
   main: '#e32129',
  },
 },
 typography: {
  fontFamily: 'Montserrat'
 }
})

const InputSelectBook = styled(Select)((props: any) => ({
 backgroundColor: props.myBackgroundColor,
 '& .MuiSelect-select': {
  width: '500px'
 },
 '& .MuiOutlinedInput-notchedOutline': {
  border: 'none'
 },
 '&	.MuiSelect-icon': {
  color: 'black',
  transform: 'rotate(-90deg)',
 },
 '&	.MuiSelect-iconOpen': {
  transform: 'rotate(0deg)',
 }
}))

class Test extends React.Component {

 render() {

  return (
   <>
    <GuestLayout>
     <Header>
      <GuestHeader />
     </Header>
     <Body>
      <InputSelectBook myBackgroundColor="white" value={1}>
       <MenuItem value={1}>Physical Therapy</MenuItem>
       <MenuItem value={2}>Occupational Therapy</MenuItem>
       <MenuItem value={2}>Speech Language</MenuItem>
      </InputSelectBook>
     </Body>
     <Footer>
      <GuestFooter />
     </Footer>
    </GuestLayout >
   </>
  )
 }
}

export default Test
