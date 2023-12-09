import React, { useState, useEffect } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import './single.scss'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import Popup from '../../components/popup/Popup'
import EditProfile from './profile/editprofile/EditProfile'
import authAxios from '../../interceptors/axios'
export const Single = () => {
  const [data, setData] = useState([])
  const [contact, setContact] = useState([])
  const [contacts, setContacts] = useState([])
  const [openPopup, setOpenPopup] = useState(false)
  const [chart,setChart]=useState([])
  useEffect(() => {
    authAxios.get('auth/user')
      .then(result => {
        setData(result.data)
      })
      .catch(error => {
        console.log(error.response.data)
      })

      authAxios.get('contact')
      .then(result => {
        setContacts(result.data)
        setContact(result.data.filter(item => item.fav === true))
      })
      .catch(error => {
        console.log(error.response.data)
      })
      authAxios.get('/count/userContact')
        .then(result => {
          setChart(result.data)
        })
        .catch(error => {
          if (error.response.status === 403) { console.log("call logout function") }
        })

  }, [])

  const editHandler = () => {
    setOpenPopup(true)
  }

  return (
    <div className='single'>
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={editHandler}>Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={data.photo ? `${process.env.REACT_APP_API_URL}/${data.photo}` : "https://fupping.com/wp-content/uploads/2018/06/Personal.png"}
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
            <Chart value={chart} title="Last 7 Days Your Contact Created" aspect={2/1}></Chart>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Favourite Contacts</h1>
          <Table value={contact}></Table>
        </div>
      </div>
      <Popup
        title="Edit Profile"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EditProfile value={data} />
      </Popup>
    </div>
  )
}
