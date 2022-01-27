import React, { FC, Children, ReactNode } from 'react'
import { Grid, Container } from '@mui/material'

interface IProps {
 children: any;
 marginTop?: number;
 marginBottom?: number;
 paddingTop?: number;
 paddingBottom?: number;
 justify?: string;
 sx?: any;
}

const FixedContainer: FC<IProps> = ({ children, marginTop = 0, marginBottom = 0, paddingTop = 0, paddingBottom = 0, justify = 'left', sx = {} }: IProps) => {
 const content = children
 const style = {
  mt: marginTop,
  mb: marginBottom,
  pt: paddingTop,
  pb: paddingBottom,
  ...sx
 }

 return (
  <Container maxWidth="xl">
   <Grid container justifyContent="center" sx={style}>
    <Grid item xs={12} sm={12} md={11} lg={10}>
     <Grid container justifyContent={justify}>
      {content}
     </Grid>
    </Grid>
   </Grid>
  </Container>
 )
}

export default FixedContainer
