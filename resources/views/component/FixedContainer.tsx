import React, { FC, Children, ReactNode } from 'react'
import { Grid } from '@mui/material'

interface IProps {
    children: React.ReactElement;
    marginTop?: number;
    marginBottom?: number;
    paddingTop?: number;
    paddingBottom?: number;
    justify?: string;
}

const FixedContainer: FC<IProps> = ({ children, marginTop = 0, marginBottom = 0, paddingTop = 0, paddingBottom = 0, justify = 'left' }: IProps) => {
 const content = children
 const style = {
  mt: marginTop,
  mb: marginBottom,
  pt: paddingTop,
  pb: paddingBottom
 }
 
 return (
  <Grid container justifyContent="center" alignItems="center" sx={style}>
   <Grid item xs={9}>
    <Grid container justifyContent={justify} alignItems="center">
     <Grid item>
      {content}
     </Grid>
    </Grid>
   </Grid>
  </Grid>
 )
}

export default FixedContainer