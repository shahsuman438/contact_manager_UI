import React from 'react'
import {Navigate,useLocation} from 'react-router-dom';
import { toast } from 'react-toastify';

function AuthProtected(props) {
    const Comp=props.cmp
    const location=useLocation()
    const auth=localStorage.getItem("authorization")
  return (
    <div>
       {auth?toast.warn("you need to logout first"):<Comp/>}
    </div>
  )
}

export default AuthProtected