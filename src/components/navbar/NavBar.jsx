import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { Link } from 'react-router-dom';

import axios from 'axios';




const NavBar = () => {
  const [user,setUser]=useState([])
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
       setUser(result.data)
    })
    .catch(error=>{
      console.log(error.response.data)
   })
   }, [authaxios])
  
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search' />
          <ContentPasteSearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">4</div>
          </div>
          <Link to="/profile">
          <div className="item">
            <img src={user.photo?`http://localhost:4000/${user.photo}`:"https://fupping.com/wp-content/uploads/2018/06/Personal.png"} alt="avatar" className='avatar'/>
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default NavBar