import React, { Component, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Typography, Box, Alert, Grid, TextField, Button, FormGroup } from '@mui/material'
import ContentHeader from '../../../component/core/ContentHeader'

interface IProps { }

interface IState {
 currentPassword: string;
 newPassword: string;
 confirmPassword: string;
}

const ChangePassword = (props: IProps) => {
 const [curPassword, useCurPassword] = useState('')
 const [newPassword, useNewPassword] = useState('')
 const [conPassword, useConPassword] = useState('')

 const onSubmit = (event: Event) => {
  event.preventDefault();

  console.log(curPassword, newPassword, conPassword)
 }


 return (
  <>
   <ContentHeader title="Change Password" desc="Where the user can change password." />
   <Box component="form" onSubmit={(event: any) => onSubmit(event)}>
    <TextField margin="normal" value={curPassword} onChange={(e) => useCurPassword(e.currentTarget.value)} required fullWidth type="password" label="Current Password" />
    <TextField margin="normal" value={newPassword} onChange={(e) => useNewPassword(e.currentTarget.value)} required fullWidth type="password" label="New Password" />
    <TextField margin="normal" value={conPassword} onChange={(e) => useConPassword(e.currentTarget.value)} required fullWidth type="password" label="Confirm Password" />
    <Button type="submit" variant="contained">Submit</Button>
   </Box>
  </>
 )
}

export default ChangePassword
