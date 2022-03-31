import React from 'react'
import './datatable.scss'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Datatable = (props) => {
  return (
    <div className='datatable' >
    <div className="datatableTitle">
        Contact List
        <Link to="/contacts/new" className='link' style={{textDecoration:"none"}}>
          <AddIcon className='add'/>
        </Link>
    </div>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className='tablecell'>photo</TableCell>
            <TableCell className='tablecell'>Name</TableCell>
            <TableCell align="center" className='tablecell'>Number</TableCell>
            <TableCell align="center" className='tablecell'>Email</TableCell>
            <TableCell align="center" className='tablecell'>Address</TableCell>
            <TableCell align="center" className='tablecell'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.value.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="right" className='tablecell'>
                  <div className="cellWrapper">
                      <img src={row.photo?`http://localhost:4000/${row.photo}`:"https://fupping.com/wp-content/uploads/2018/06/Personal.png"} alt="" className="image" />
                      {row.fav?<div className="fav"></div>:null}
                  </div>
              </TableCell>
              <TableCell component="th" scope="row" className='tablecell'>{row.name}</TableCell>
              <TableCell align="center" className='tablecell'>{row.number}</TableCell>
              <TableCell align="center" className='tablecell'>{row.email}</TableCell>
              <TableCell align="center" className='tablecell'>{row.address}</TableCell>
              <TableCell align="center" className='tablecell action'>
                <button className='editButton'><EditIcon/></button>
                <button className='deleteButton'><DeleteIcon/></button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}


export default Datatable




