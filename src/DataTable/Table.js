import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import {Button} from '@mui/material'

const DataTable = () => {
    
    
    return (
  <Container>  
    <Button sx={{marginBottom:2, float:'right'}} variant="contained">Add New Note</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Details</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">First Note</TableCell>
              <TableCell align="right">First Note details</TableCell>
            </TableRow>
         
        </TableBody>
        <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
      </Table>
    </TableContainer>
 </Container>   
    )
}

export default DataTable
