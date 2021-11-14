import React, { useState } from 'react'

import ContentHeader from '../../../component/core/ContentHeader'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Button, Modal, Box } from '@mui/material'
import DataTable from '../../../component/core/DataTable'
import Utilities from '../../../../global/utilities'
import ModalForm from '../../../component/core/ModalForm'
import { Typography } from '@material-ui/core'

const compDateTime = (date: string) => {
 return (`${Utilities.shortDate(date)} - ${Utilities.shortTime(date)}`)
}

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
   customBodyRenderLite: (value: any, tableMeta: any, updateValue: any) => {
    return (
     <>
      <IconButton color="primary" onClick={() => console.log(value, tableMeta)}>
       <EditIcon />
      </IconButton>
      <IconButton color="error" onClick={() => console.log(value, tableMeta)}>
       <DeleteIcon />
      </IconButton>
     </>
    )
   }
  }
 },
];
const Users = () => {
 const [modal, setModal] = useState(false)

 return (
  <>
   <Button onClick={() => {
    setModal(true)
   }}>Open</Button>
   <ModalForm open={modal}>
    <ModalForm.Slot name="Header">
     Add
    </ModalForm.Slot>
    <ModalForm.Slot name="Content">
    </ModalForm.Slot>
    <ModalForm.Slot name="Footer">
     <Button color="primary" onClick={() => { setModal(false) }}>Cancel</Button>
    </ModalForm.Slot>
   </ModalForm>
   <ContentHeader title="User list" desc="Where you can see the all users (Restricted for dev only or user)" />
   <DataTable title={'User List'} url="user" column={column} />
  </>
 )
}

export default Users;
