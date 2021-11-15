import React, { useState, useRef } from 'react'

import ContentHeader from '../../../component/core/ContentHeader'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Button, Modal, Box } from '@mui/material'
import DataTable from '../../../component/core/DataTable'
import Utilities from '../../../../global/utilities'
import ModalForm from '../../../component/core/ModalForm'

import BasicField from '../../../component/form/BasicField'
import EmailField from '../../../component/form/EmailField'
import PasswordField from '../../../component/form/PasswordField'

interface Validator {
 name: string;
};

const compDateTime = (date: string) => {
 return (`${Utilities.shortDate(date)} - ${Utilities.shortTime(date)}`)
}

const Users = () => {

 const column = [
  {
   name: "name",
   label: "Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "email",
   label: "Email",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "email_verified_at",
   label: "Email Verified",
   options: {
    filter: true,
    sort: true,
    customBodyRender: (value: string) => compDateTime(value)
   }
  },
  {
   name: "created_at",
   label: "Date Created",
   options: {
    filter: true,
    sort: true,
    customBodyRender: (value: string) => compDateTime(value)
   }
  },
  {
   name: "updated_at",
   label: "Date Updated",
   options: {
    filter: true,
    sort: true,
    customBodyRender: (value: string) => compDateTime(value)
   }
  },
  {
   name: "Actions",
   options: {
    filter: false,
    sort: false,
    customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
     return (
      <>
       <IconButton color="primary" onClick={() => updateData(false, tableMeta)}>
        <EditIcon />
       </IconButton>
       <IconButton color="error" onClick={() => updateData(false, tableMeta)}>
        <DeleteIcon />
       </IconButton>
      </>
     )
    }
   }
  },
 ];

 const [modal, setModal] = useState(false)
 const [isAdd, setIsAdd] = useState(true)

 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const formRef = useRef(null)

 const resetForm = () => {
  setName('')
  setEmail('')
  setPassword('')
 }

 const updateData = (type: boolean, data?: any) => {
  setModal(true)
  setIsAdd(type)
  if (isAdd) resetForm()

  console.log(data)
 }

 const DataTableHeader = () => {
  return (
   <>
    <Button onClick={() => updateData(true)} variant="contained">Add</Button>
   </>
  );
 }

 /*  const inputChange = (event: any): void => {
   const newState = { [event.currentTarget.name]: event.currentTarget.value } as Pick<Validator, keyof Validator>
   setData(newState)
  } */

 const submit = () => {

 }

 return (
  <>
   <ModalForm open={modal}>
    <ModalForm.Slot name="Header">
     {(isAdd == true) ? 'Add' : 'Edit'} {'Users'}
    </ModalForm.Slot>
    <ModalForm.Slot name="Content">
     <Box component="form" ref={formRef} noValidate sx={{ mt: 1 }}>
      <BasicField label="Name" name="name" onChange={(event: any) => setName(event.currentTarget.value)} />
      <EmailField label="Email" name="email" onChange={(event: any) => setEmail(event.currentTarget.value)} />
      <PasswordField label="Password" name="password" onChange={(event: any) => setEmail(event.currentTarget.value)} />
     </Box>
    </ModalForm.Slot>
    <ModalForm.Slot name="Footer">
     <Button color="primary" variant="contained" onClick={submit}>Submit</Button>
     <Button color="primary" onClick={() => { setModal(false) }}>Cancel</Button>
    </ModalForm.Slot>
   </ModalForm>

   <ContentHeader title="User list" desc="Where you can see the all users (Restricted for dev only or user)" />
   <DataTable title={'User List'} url="user" column={column} header={<DataTableHeader />} />
  </>
 )
}

export default Users;
