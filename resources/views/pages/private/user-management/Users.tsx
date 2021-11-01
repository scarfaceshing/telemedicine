import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import ContentHeader from '../../../component/core/ContentHeader'
import DataTable from '../../../component/core/DataTable'

const trow = [
 {
  name: "Name",
  dtColumn: "name",
 },
 {
  name: "Email",
  dtColumn: "email",
 },
 {
  name: "Verified",
  dtColumn: "email_verified_at",
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
 const [thColumn, setThColumn] = useState(trow)
 const [mounted, setMounted] = useState(false)

 useEffect(() => {
  setMounted(true)
  return () => {
   setMounted(false)
  }
 }, [])

 const Table = ({ }) => {
  if (mounted) {
   return (
    <DataTable url="user" trow={thColumn} />
   )
  } else {
   return <></>
  }
 }

 return (
  <>
   <ContentHeader title="User list" desc="Where you can see the all users (Restricted for dev only or user)" />
   <Table />
  </>
 )
}

export default Users
