import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const ContentHeader = (props: any) => {
 const location = useLocation()

 return (
  <>
   <Grid container>
    <Grid item>
     <Typography>

     </Typography>
    </Grid>
   </Grid>
  </>
 )
}

ContentHeader.propTypes = {

}

export default ContentHeader

