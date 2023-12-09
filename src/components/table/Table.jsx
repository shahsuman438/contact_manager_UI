import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

function Tables(props) {
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className='tablecell'>photo</TableCell>
            <TableCell className='tablecell'>Name</TableCell>
            <TableCell align="center" className='tablecell'>Number</TableCell>
            <TableCell align="center" className='tablecell'>Email</TableCell>
            <TableCell align="center" className='tablecell'>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.value.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="right" className='tablecell'>
                <div className="cellWrapper">
                  <img src={row.photo ? `${process.env.REACT_APP_API_URL}/${row.photo}` : "https://fupping.com/wp-content/uploads/2018/06/Personal.png"} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell component="th" scope="row" className='tablecell'>{row.name}</TableCell>
              <TableCell align="center" className='tablecell numbers'>{
                row.number.slice(-2).map((num) =>
                  <div className="number " key={num._id}>
                    <p>{num.name}:</p>
                    <p>+977-{num.number}</p>
                  </div>
                )
              }</TableCell>
              <TableCell align="center" className='tablecell'>{row.email}</TableCell>
              <TableCell align="center" className='tablecell'>{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables