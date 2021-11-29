import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react'
import { TextField } from '@mui/material'

interface IProps {
 label: string;
 name: string;
 onChange: ChangeEventHandler;
}

const PasswordField = ({ label, name, onChange }: IProps) => {

 return (
  <TextField type="password" label={label} name={name} onChange={onChange} margin="normal" fullWidth={true} />
 )
}

export default PasswordField;
