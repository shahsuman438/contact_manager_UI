import React ,{useEffect,useState} from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/NavBar'
import './list.scss'
import Datatable from '../../components/datatable/Datatable'
import axios from 'axios'

export const List = () => {
  const [data,setData]=useState([])
  const authKey=localStorage.getItem('authorization')
  const authaxios=axios.create({
    baseURL:"http://localhost:4000/",
    headers:{
        Authorization:`Bearer ${authKey}`
    }
  })
  useEffect(() => {
    authaxios.get('contact')
    .then( result=>{
       setData(result.data)
    })
    .catch(error=>{
      console.log(error.response.data)
   })
  
   },[])
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
          <Navbar/>
          <Datatable value={data.slice(0).reverse()}/>
      </div>
    </div>
  )
}
