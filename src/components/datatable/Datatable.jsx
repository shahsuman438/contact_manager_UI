import React, { useState } from 'react'
import './datatable.scss'

import { DataGrid } from '@mui/x-data-grid';

import { userColumns,userRows } from '../../data/DataSource';
import { Link } from 'react-router-dom';








const Datatable = () => {
  const [data,setData]=useState(userRows)

  const deleteHandler=(id)=>{
      setData(data.filter(item=>item.id!==id))
  }



  const actionColumn=[
    {
      field:"action", headerName:"ACTION", width:300,renderCell:(params)=>{
        return (
          <div className='cellAction'>
            <Link to="/contacts/new" style={{textDecoration:"none"}}>
                <div className="viewButton">View</div>
            </Link>
              <div className="deleteButton" onClick={()=>deleteHandler(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable' >
      <div className="datatableTitle">
        Add New Contact 
        <Link to="/contacts/new" className='link' style={{textDecoration:"none"}}>
          Add
        </Link>
      </div>
       <DataGrid 
       className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable




