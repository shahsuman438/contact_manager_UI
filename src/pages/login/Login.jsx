import React, { useState } from 'react';
import './login.scss';
import image from '../../static/loginImg/login.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  email: '',
  password: ''
}
function Login() {

  const navigate = useNavigate()
  const [userId, setUserId] = useState(initialState)
  const [msg, setMsg] = useState('')

  const submitHandler = async (event) => {
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, userId,{withCredentials:true})
      .then(res => {
        localStorage.setItem("AccessToken", res.data.AccessToken)
        setMsg('')
        toast.success("Login Success")
        navigate("/")
      }).catch(error => {
        console.log("Error##:-", error.response.data.msg)
        setMsg(error.response.data.msg)
        toast.error(error.response.data.msg)
      })
  }

  return (
    <div className='login'>
      <div className="header">
        Login
      </div>
      <form className="content" onSubmit={submitHandler}>
        <div className="logo">
          <img src={image} alt="" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' required placeholder='Email' onChange={(e) => setUserId({ ...userId, email: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" required name='password' placeholder='Password' onChange={(e) => setUserId({ ...userId, password: e.target.value })} />
          </div>
          <p className='errorMsg'>{msg}</p>
        </div>
        <div className="footer">
          <button type='submit' className="btn">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login