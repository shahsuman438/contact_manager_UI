import React from 'react';
import registerImg from '../../static/loginImg/register2.svg'

import './register.scss'


function Register() {
  return (
    <div className='register'>
        <div className="header">
          Register
        </div>
        <div className="content">
          <div className="logo">
            <img src={registerImg} alt="" />
          </div>
        <div className="form">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Name' />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Email' />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='Password' />
          </div>
          <div className="form-group">
            <label htmlFor="Repassword">Password</label>
            <input type="password" name='Repassword' placeholder='Re-type Password' />
          </div>
        </div>
        <div className="footer">
          <button type='button' className="btn">Register</button>
        </div>
        </div>
      </div>
  )
}

export default Register