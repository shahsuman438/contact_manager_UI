import React, { useContext, useState, useEffect } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { toast } from 'react-toastify';
import { darkmodeContext } from '../../context/darkmodeContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import GroupIcon from '@mui/icons-material/Group';
import authAxios from '../../interceptors/axios'
import "./sidebar.scss"

const SideBar = () => {
  const { dispatch } = useContext(darkmodeContext)
  const navigate = useNavigate()
  const logoutHandler = async () => {
    localStorage.removeItem("AccessToken")
    await authAxios.post('auth/logout', {}, { withCredentials: true }).then(
      res => {
        navigate('/auth')
        toast.success(res.data.msg)
      }
    )
    
  }
  const [user, setUser] = useState([])
  useEffect(() => {
    authAxios.get('auth/user')
      .then(result => {
        setUser(result.data.name.split(' ')[0])
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }, [])

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Hi! {user}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className='icon' />
              <span>
                dashboard
              </span>
            </li>
          </Link>

          <p className="title">LIST</p>
          <Link to="/contacts" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className='icon' />
              <span>
                Contacts
              </span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>
                Profile
              </span>
            </li>
          </Link>
          <li onClick={logoutHandler}>
            <LogoutOutlinedIcon className='icon' />
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default SideBar