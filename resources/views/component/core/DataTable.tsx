import { Grid, Typography, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow, TablePagination } from '@mui/material'
import Http from '../../../api/Api'
import React, { FC, useState, useEffect } from 'react'

interface IProps {
 url: string;
 trow: Array<any>;
}
interface IState { }

const DataTable: FC<IProps> = ({ url, trow }: IProps) => {
 const [callBackData, setCallBackData] = useState([])
 const [callBackQuery, setCallBackQuery] = useState([])

 const [page, setPage] = useState(0);
 const [rowsPerPage, setRowsPerPage] = useState(5);
 const [rowsPerPageOptions, setRowsPerPageOptions] = useState([5, 10, 25, 100])
 const [offset, setOffset] = useState(0)
 const [perPage, setPerPage] = useState(5)
 const [total, setTotal] = useState(0)

 const handleChangePage = (event: any, newPage: number) => {
  setPage(newPage)
  setOffset(newPage * perPage)
 };

 const handleChangeRowsPerPage = (event: any) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
  setOffset(0)

  setPerPage(parseInt(event.target.value))
 };

 const getData = async () => {

  const data = await Http.get(`/auth/data/${url}/${offset}/${perPage}`)
  return data
 }

 useEffect(() => {
  getData().then((res: any) => {
   const { user, query } = res.data
   const { total } = query
   setCallBackData(user)
   setCallBackQuery(query)
   setTotal(total)
  })
 }, [offset, perPage, total])

 useEffect(() => {
  let isMounted = true

  getData().then((res: any) => {
   if (isMounted) {
    const { user, query } = res.data
    const { total } = query
    setCallBackData(user)
    setCallBackQuery(query)
    setTotal(total)
   }
  })

  return () => { isMounted = false };
 }, [])

 const DataTableBody = ({ data, trow }: any) => {

  return (
   <TableBody>
    {data.map((item: any, index_a: number) => (
     <TableRow key={index_a}>
      <TableCell>{offset + index_a + 1}</TableCell>
      {trow.map(({ name, dtColumn }: any, index_b: number) => (
       <TableCell key={index_b}>{item[dtColumn]}</TableCell>
      ))}
     </TableRow>
    ))}
   </TableBody>
  )
 }

 return (
  <>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
     <TableHead>
      <TableRow>
       <TableCell># </TableCell>
       {trow.map(({ name, dtColumn }: any, index: number) => (
        <TableCell key={index}>{name}</TableCell>
       ))}
      </TableRow>
     </TableHead>
     <DataTableBody trow={trow} data={callBackData} />
    </Table>
    <TablePagination
     component="div"
     rowsPerPageOptions={rowsPerPageOptions}
     count={total}
     rowsPerPage={rowsPerPage}
     page={page}
     onPageChange={handleChangePage}
     onRowsPerPageChange={handleChangeRowsPerPage}
    />
   </TableContainer>
  </>
 )
}


export default DataTable

