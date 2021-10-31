import React, { useState } from 'react'
import SystemLayout, { Header, Body, Footer } from '../../../layout/System'
import { Typography } from '@mui/material'
import ContentHeader from '../../../component/core/ContentHeader'
import DataTable from '../../../component/core/DataTable'

const trow = [
 {
  name: "Name",
  dtColumn: "name"
 },
 {
  name: "Email",
  dtColumn: "email"
 },
 {
  name: "Verified",
  dtColumn: "verified_at"
 },
 {
  name: "Date Created",
  dtColumn: "created_at"
 },
 {
  name: "Date Updated",
  dtColumn: "updated_at"
 }
];

const Users = () => {
 const [thColumn, useThColumn] = useState([trow])

 return (
  <>
   <SystemLayout>
    <Header>
     <Typography>
      Sandbox - Telemedicine App
     </Typography>
    </Header>
    <Body>
     <ContentHeader title="User list" desc="Where you can see the all users (Restricted for dev only or user)" />

     <DataTable url="user" trow={thColumn} />
    </Body>
    <Footer>
    </Footer>
   </SystemLayout>
  </>
 )
}

export default Users
