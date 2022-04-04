import React  from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/NavBar'
import './list.scss'
import Datatable from '../../components/datatable/Datatable'
export const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
          <Navbar/>
          <Datatable/>
      </div>
    </div>
  )
}
