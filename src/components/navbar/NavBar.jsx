import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';
import authAxios from '../../interceptors/axios';




const NavBar = () => {
  const [user,setUser]=useState([])
  useEffect(() => {
    authAxios.get('auth/user')
    .then( result=>{
       setUser(result.data)
    })
    .catch(error=>{
      console.log(error.response.data)
   })
   },[])
  
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          {/* <input type="text" placeholder='search' />
          <ContentPasteSearchOutlinedIcon className='icon'/> */}
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">4</div>
          </div> */}
          <Link to="/profile">
          <div className="item">
            <img src={user.photo?`${process.env.REACT_APP_API_URL}/${user.photo}`:"https://fupping.com/wp-content/uploads/2018/06/Personal.png"} alt="avatar" className='avatar'/>
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default NavBar