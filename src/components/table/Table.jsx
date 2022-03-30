import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

function createData(name, number, email, address,image) {
  return { name, number, email, address,image };
}

const rows = [
  createData('Frozen yoghurt', 9815213183,'shahsuman438@gmail.com', 'birgunj','https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'),
  createData('Frozen yoghrt', 9815213183,'shahsuman438@gmail.com', 'birgunj','https://assets.entrepreneur.com/content/3x2/2000/20150820205507-single-man-outdoors-happy-bliss.jpeg'),
  createData('Frozen yghurt', 9815213183,'shahsuman438@gmail.com', 'birgunj','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpL6Hl7NtoaIQksyHLMd9ipglEQsVpwfeWlqmv2pLc0CEarX6w82yExq4_q841u6qpn8&usqp=CAU'),
  createData('Froen yoghurt', 9815213183,'shahsuman438@gmail.com', 'birgunj','https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg'),
  createData('Fozn yoghurt', 9815213183,'shahsuman438@gmail.com', 'birgunj','https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1Y2Nlc3N8ZW58MHx8MHx8&w=1000&q=80'),
];

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
                      <img src={row.photo?`http://localhost:4000/${row.photo}`:"https://fupping.com/wp-content/uploads/2018/06/Personal.png"} alt="" className="image" />
                  </div>
              </TableCell>
              <TableCell component="th" scope="row" className='tablecell'>{row.name}</TableCell>
              <TableCell align="center" className='tablecell'>{row.number}</TableCell>
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