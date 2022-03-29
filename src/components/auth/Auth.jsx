
import React, { useState } from 'react'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import './auth.scss'


function Auth() {
    const[islogin,setIsLogIn]=useState(true)
  return (
    <div className="auth">
        <div className="container">
            <div className={islogin?"nav loggedin":"nav registerin"}>
                <button className='loginbtn' onClick={()=>setIsLogIn(true)}>Login</button>
                <button className='registerbtn' onClick={()=>setIsLogIn(false)}>Register</button>
            </div>
           {islogin?<Login/>:<Register/>}    
        </div>
    </div>
  )
}

export default Auth