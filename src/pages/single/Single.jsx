import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import './single.scss'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
export const Single = () => {
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
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">
                  jane Doe
                </h1>
                <div className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className="itemValue">joe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>phone:</span>
                  <span className="itemValue">+977-9815213183</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className="itemValue">Shreepur 14 Birgunj</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className="itemValue">Nepal</span>
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
