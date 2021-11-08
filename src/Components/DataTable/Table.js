import {React,useContext} from 'react'
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
import {Link} from 'react-router-dom'
import {GlobalContext} from '../Context/GlobalState'
const DataTable = () => {
    const {notes}=useContext(GlobalContext)
    return (
  <Container>
    <Link to='/add-note'>  
    <Button sx={{marginBottom:2, float:'right'}} variant="contained">Add New Note</Button>
    </Link>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
        {notes.map((note)=>
            <TableRow key={note.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{note.id}</TableCell>
              <TableCell align="right">{note.title}</TableCell>
              <TableCell align="right">{note.details}</TableCell>
              <TableCell align="right">
              <Link to='/edit-note' underline="none">    
              <Button sx={{marginRight:2,}} color="success" variant="contained">Edit</Button>
              </Link>
              <Button  variant="outlined" color="error">delete</Button>
              </TableCell>
            </TableRow>
        )}
         
        </TableBody>
        <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
      </Table>
    </TableContainer>
 </Container>   
    )
}

export default DataTable
