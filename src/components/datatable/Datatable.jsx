import React from 'react'
import './datatable.scss'

import { DataGrid } from '@mui/x-data-grid';

import { userColumns,userRows } from '../../data/DataSource';
import { Link } from 'react-router-dom';

const actionColumn=[
  {
    field:"action", headerName:"ACTION", width:200,renderCell:()=>{
      return (
        <div className='cellAction'>
          <Link to="/contacts/new" style={{textDecoration:"none"}}>
              <div className="viewButton">View</div>
          </Link>
            <div className="deleteButton">Delete</div>
        </div>
      )
    }
  }
]
const Datatable = () => {
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New Contact 
        <Link to="/contacts/new" className='link' style={{textDecoration:"none"}}>
          Add
        </Link>
      </div>
       <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable




