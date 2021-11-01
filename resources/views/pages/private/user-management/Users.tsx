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
  dtColumn: "email_verified_at"
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
 const [thColumn, useThColumn] = useState(trow)

 return (
  <>
   <ContentHeader title="User list" desc="Where you can see the all users (Restricted for dev only or user)" />
   <DataTable url="user" trow={thColumn} />
  </>
 )
}

export default Users
