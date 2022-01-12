import React, { useRef, useEffect, ReactElement } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface IProps {
 children?: any;
}

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const width = '200px'
const height = '200px'

const useStyles = makeStyles({
 root: {
  width: width
 },
})

const TextEllipsis = ({children}: IProps)  => {
 const wrapper = useRef<any>(null)
 const content = children.substring(0, children.length - 3)
 const classes = useStyles()

 return (
  <>
   <Box className={classes.root} ref={wrapper}>
    {children}
   </Box>
  </>
 )
}

export default TextEllipsis