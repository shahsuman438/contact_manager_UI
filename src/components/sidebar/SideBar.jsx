import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { Link } from 'react-router-dom';
 
const SideBar = () => {
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

          <li>
          <LogoutOutlinedIcon className='icon'/>
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        {/* <div className="colorOption"></div> */}

      </div>
    </div>
  )
}

export default SideBar