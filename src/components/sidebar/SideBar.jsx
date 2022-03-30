import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { darkmodeContext } from '../../context/darkmodeContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
const SideBar = () => {

  const {dispatch} =useContext(darkmodeContext)
  const navigate=useNavigate()
  const logoutHandler=()=>{
        localStorage.removeItem("authorization")
        navigate('/auth')
  }
    return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">LeapFrog</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className='icon'/>
            <span>
              dashboard
            </span>
          </li>
          </Link>
         
          <p className="title">LIST</p>
          <Link to="/contacts" style={{textDecoration:"none"}}>
            <li>
            <PersonOutlineOutlinedIcon className='icon'/>
              <span>
                Contacts
              </span>
            </li>
          </Link>
          <li>
          <ContactPageOutlinedIcon className='icon'/>
            <span>
              product
            </span>
          </li>
          <p className="title">USER</p>

          <li onClick={logoutHandler}>
          <LogoutOutlinedIcon className='icon'/>
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default SideBar