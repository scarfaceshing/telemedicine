import React from 'react'
import { Button } from '@mui/material'
import './Component.scss'
import { fontWeight } from '@mui/system'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const CSS: ICss = {
 button: {
  ml: 5,
  py: 1.5,
  px: 4,
  fontFamily: 'Montserrat',
  fontWeight: 700,
 }
}

const SelectWithBook = () => {
 return (
  <div className="wrapper-select">
   <select className="select">
    <option>Physical Therapy</option>
    <option>Occupational Therapy</option>
    <option>Speech Language</option>
   </select>
   <Button className="button" sx={CSS.button} variant="contained">
    Book Now
   </Button>
  </div>
 )
}

export default SelectWithBook
