import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

interface IProps {
 title?: string;
 desc?: string;
}
interface IState { }

const ContentHeader = ({ title, desc }: IProps) => {
 const location = useLocation()

 return (
  <>
   <Grid container>
    <Grid item>
     <Typography variant="h5" component="h5" gutterBottom>
      {title}
     </Typography>
     <Typography variant="subtitle2">
      {desc}
     </Typography>
    </Grid>
   </Grid>
  </>
 )
}


export default ContentHeader

