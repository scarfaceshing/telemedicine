import React, { FC, Children, ReactNode } from 'react'
import { Grid, Container } from '@mui/material'

interface IProps {
 children: any;
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
  <Container maxWidth="xl">
   <Grid container justifyContent="center" alignItems="center" sx={style}>
    <Grid item xs={10}>
     <Grid container justifyContent={justify}>
      {content}
     </Grid>
    </Grid>
   </Grid>
  </Container>
 )
}

export default FixedContainer