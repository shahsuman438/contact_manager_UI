import React, { useState } from 'react';
import './login.scss';
import image from '../../static/loginImg/login.svg'
import axios from 'axios';

const initialState={
  email:'',
  password:''
}

function Login() {
  const [userId,setUserId]=useState(initialState)
  const [msg,setMsg]=useState('')
  const submitHandler=(event)=>{
      console.log(JSON.stringify(userId))
      axios.post('http://localhost:4000/auth/login',userId)
      .then(res=>{
        console.log(res.data.token)
        localStorage.setItem("auth",res.data.token)
        
        setMsg('')
      }).catch(error=>{
        console.log("Error##:-",error.response.data.msg)
        setMsg(error.response.data.msg)
      })
      event.preventDefault()
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
              <input type="email" name='email' required placeholder='Email' onChange={(e)=>setUserId({...userId,email:e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" required name='password' placeholder='Password' onChange={(e)=>setUserId({...userId,password:e.target.value})}/>
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