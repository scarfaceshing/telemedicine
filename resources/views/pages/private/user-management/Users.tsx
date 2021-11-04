import React, { useState, useEffect, FC } from 'react'
import { Typography } from '@mui/material'
import ContentHeader from '../../../component/core/ContentHeader'
import DataTable from '../../../component/core/DataTable'
import MUIDataTable from "mui-datatables";
import Http from '../../../../api/Api'

const trow = [
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
  }
 },
 {
  name: "created_at",
  label: "Date Created",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "updated_at",
  label: "Date Updated",
  options: {
   filter: true,
   sort: true,
  }
 }
];

interface IProps { }

const Users: FC<IProps> = () => {
 const [thColumn, setThColumn] = useState(trow)
 const [mounted, setMounted] = useState(false)
 const [data, setData] = useState([])

 useEffect(() => {
  setMounted(true)
  return () => {
   setMounted(false)
  }
 }, [])

 const loadTable = () => {
  Http.get('/auth/data/user').then(({ data }: any) => {
   setData(data)
  })
 }

 const options: any = {
  filters: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5],
  serverSide: true,
  count: -1,
  onTableChange: async (action: string, tableState: any) => {
   loadTable()
  }
 }

 return (
  <>
   <ContentHeader title="User list" desc="Where you can see the all users (Restricted for dev only or user)" />
   <MUIDataTable
    title={"Employee List"}
    data={data}
    columns={thColumn}
    options={options}
   />
  </>
 )
}

export default Users
