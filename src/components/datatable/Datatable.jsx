import React, { useState, useEffect } from 'react'
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
import authAxios from '../../interceptors/axios';
import { toast } from 'react-toastify';

const Datatable = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const deleteHandler = (e) => {
    authAxios.delete(`contact/${e}`)
      .then(result => {
        toast.success(result.data.msg)
      })
      .catch(error => {
        toast.error(`${error.response.status} ${error.response.statusText}`)
      })
  }
  useEffect(() => {
    authAxios.get('contact')
      .then(result => {
        setData(result.data.slice(0).reverse())
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }, [])

  return (
    <div className='datatable' >
      <div className="datatableTitle">
        Contact List
        <input className='search' type="text" placeholder='Search....' onChange={(e) => setQuery(e.target.value)} />
        <Link to="/contacts/new" className='link' style={{ textDecoration: "none" }} value={"value from data table"}>
          <AddIcon className='add' />
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
            {data.filter(item => item.name.toLowerCase().includes(query)).map((row) => (
              <TableRow key={row._id}>
                <TableCell align="right" className='tablecell'>
                  <div className="cellWrapper">
                    <img src={row.photo ? `${process.env.REACT_APP_API_URL}/${row.photo}` : "https://fupping.com/wp-content/uploads/2018/06/Personal.png"} alt="" className="image" />
                    {row.fav ? <div className="fav"></div> : null}
                  </div>
                </TableCell>
                <TableCell component="th" scope="row" className='tablecell'>{row.name}</TableCell>
                <TableCell align="center" className='tablecell numbers'>
                  {
                    row.number.slice(-2).map((num) =>
                      <div className="number " key={num._id}>
                        <p>{num.name}:</p>
                        <p>+977-{num.number}</p>
                      </div>
                    )
                  }
                </TableCell>
                <TableCell align="center" className='tablecell'>{row.email}</TableCell>
                <TableCell align="center" className='tablecell'>{row.address}</TableCell>
                <TableCell align="center" className='tablecell action'>
                  <Link to={{ pathname: `edit/${row._id}` }} className='link' style={{ textDecoration: "none" }} value={"value from data table"}>
                    <button className='editButton' ><EditIcon /></button>
                  </Link>
                  <button className='deleteButton' onClick={() => deleteHandler(row._id)} ><DeleteIcon /></button>
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




