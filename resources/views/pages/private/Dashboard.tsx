import React, { Component } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Typography, Box, Alert, Grid } from '@mui/material'
import ContentHeader from '../../component/core/ContentHeader'

interface IProps { }

interface IState { }

export class Dashboard extends Component<IProps, IState> {

 constructor(props: IProps) {
  super(props)
 }

 render() {
  return (
   <>
    <ContentHeader title="Dashboard" />
    <Alert severity="error">This is page not available for now.. :D </Alert>
   </>
  )
 }
}

export default Dashboard
