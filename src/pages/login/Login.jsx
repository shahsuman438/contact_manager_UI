import React, { Component } from 'react';
import './login.scss';
import image from '../../static/loginImg/login.svg'

function Login() {
  return (
    <div className='login'>
        <div className="header">
          Login
        </div>
        <div className="content">
          <div className="logo">
            <img src={image} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' placeholder='Email' />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' placeholder='Password' />
            </div>
          </div>
          <div className="footer">
            <button type='button' className="btn">Login</button>
          </div>
        </div>
      </div>
  )
}

export default Login