import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react'
import { TextField } from '@mui/material'

interface IProps {
 label: string;
 name: string;
 onChange: ChangeEventHandler;
}

const EmailField = ({ label, name, onChange }: IProps) => {

 return (
  <TextField label={label} name={name} onChange={onChange} margin="normal" fullWidth={true} />
 )
}

export default EmailField;
