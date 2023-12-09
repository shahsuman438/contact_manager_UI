import React, { useState } from 'react';
import registerImg from '../../static/loginImg/register2.svg'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './register.scss'
import axios from 'axios'

const initialState = {
  name: '',
  email: '',
  password: ''
}

function Register() {
  const [register, setRegister] = useState(initialState)
  const [msg, setMsg] = useState('')
  const [rePass, setRePass] = useState('')
  const navigate = useNavigate()

  const submitHandler = (event) => {
    if (register.password !== rePass) {
      setMsg("Confirm Password not matched")
      toast.warn("Confirm Password not matched")
    } else {
      setMsg("")
      axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, register)
        .then(res => {
          localStorage.setItem("AccessToken", res.data.AccessToken)
          setMsg('')
          toast.success("Register Success")
          navigate("/")
        }).catch(error => {
          setMsg(error.response.data.msg)
          toast.error(error.response.data.msg)
        })
    }
    event.preventDefault()
  }
  return (
    <div className='register'>
      <div className="header">
        Register
      </div>
      <form className="content" onSubmit={submitHandler}>
        <div className="logo">
          <img src={registerImg} alt="" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Name' onChange={(e) => setRegister({ ...register, name: e.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Email' onChange={(e) => setRegister({ ...register, email: e.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='Password' onChange={(e) => setRegister({ ...register, password: e.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="Repassword">Confirm Password</label>
            <input type="password" name='Repassword' placeholder='Re-type Password' onChange={(e) => setRePass(e.target.value)} required />
          </div>
        </div>
        <p className='errorMsg'>{msg}</p>
        <div className="footer">
          <button type='submit' className="btn">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register