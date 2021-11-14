import React, { useState, useEffect, FC } from 'react'
import { Typography, IconButton } from '@mui/material'
import MUIDataTable from "mui-datatables";
import Http from '../../../api/Api'

interface IProps {
 title: string;
 url: string;
 column: any;
}

const Users: FC<IProps> = ({ title, url, column }: IProps) => {
 const [mounted, setMounted] = useState(false)

 const [data, setData] = useState([])
 const [count, setCount] = useState(0)

 const [page, setPage] = useState(1)
 const [offset, setOffset] = useState(0)
 const [limit, setLimit] = useState(5)
 const [order, setOrder] = useState('created_at')
 const [align, setAlign] = useState('desc')
 const [filter, setFilter] = useState('')
 const [perPage, setPerPage] = useState([5, 10, 25])
 const [toggleRequest, setToggleRequest] = useState(true)

 useEffect(() => {
  setMounted(true)
  return () => {
   setMounted(false)
  }
 }, [])

 const loadTable = () => {
  Http.get(`/auth/data/${url}?offset=${offset}&limit=${limit}&orderby=${order}&sort=${align}&filter=${filter}`).then(({ data }: any) => {
   setData(data.result)
   setCount(data.count)
  })
 }

 useEffect(() => {
  loadTable()
 }, [page, limit, order, align, filter])

 const options: any = {
  filterType: 'textField',
  rowsPerPage: limit,
  rowsPerPageOptions: perPage,
  serverSide: true,
  filter: false,
  print: false,
  download: false,
  viewColumns: false,
  searchAlwaysOpen: true,
  elevation: 0,
  count: count,
  selectableRowsHideCheckboxes: true,
  onTableInit: (action: string, tableState: any) => {
   setPage(tableState.page)
  },
  onChangePage: (currentPage: number) => {
   setPage(currentPage)
   setOffset(currentPage * limit)
  },
  onChangeRowsPerPage: (numberOfRows: number) => {
   setLimit(numberOfRows)
  },
  onColumnSortChange: (changeColumn: string, direction: string) => {
   setOrder(changeColumn)
   setAlign(direction)
  },
  onSearchChange: (searchText: string) => {
   if (searchText === null) searchText = ''
   setFilter(searchText)
  }
 }

 return (
  <>
   <MUIDataTable
    title={title}
    data={data}
    columns={column}
    options={options}
   />
  </>
 )
}

export default Users
