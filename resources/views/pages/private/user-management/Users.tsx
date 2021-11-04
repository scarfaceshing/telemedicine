import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import ContentHeader from '../../../component/core/ContentHeader'
import DataTable from '../../../component/core/DataTable'
import MUIDataTable from "mui-datatables";
import Http from '../../../../api/Api'

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

const columns = ["name", "email", "email_verified_at", "created_at", "updated_at"];

const Users = () => {
 const [thColumn, setThColumn] = useState(trow)
 const [mounted, setMounted] = useState(false)
 const [data, setData] = useState([])

 useEffect(() => {
  setMounted(true)
  return () => {
   setMounted(false)
  }
 }, [])

 const options: any = {
  serverSide: true,
  onTableChange: async (action: any, tableState: any) => {
   const { data } = await Http.get('/auth/data/user/0/5/created_at/asc');
   setData(data.result)
  }
 };

 return (
  <>
   <ContentHeader title="User list" desc="Where you can see the all users (Restricted for dev only or user)" />
   <MUIDataTable
    title={"Employee List"}
    data={data}
    columns={columns}
    options={options}
   />
  </>
 )
}

export default Users
