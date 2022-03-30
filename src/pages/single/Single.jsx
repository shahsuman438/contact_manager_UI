import React, { useState,useEffect } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import './single.scss'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import axios from 'axios'





export const Single = () => {
  const [data,setData]=useState([])
  const authKey=localStorage.getItem('authorization')
  const authaxios=axios.create({
    baseURL:"http://localhost:4000/",
    headers:{
        Authorization:`Bearer ${authKey}`
    }
})
  useEffect(() => {
    authaxios.get('auth/user')
    .then( result=>{
       console.log(result.data)
       setData(result.data)
    })
    .catch(error=>{
      console.log(error.response.data)
   })
   }, [])



  return (
    <div className='single'>
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={`http://localhost:4000/${data.photo}`}
                alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                 {data.name}
                </h1>
                <div className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>phone:</span>
                  <span className="itemValue">+977-{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className="itemValue">{data.address}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className="itemValue">{data.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart></Chart>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Favourite Contacts</h1>
          <Table></Table>
        </div>
      </div>
    </div>
  )
}
