import React from 'react'
import {Navigate,useLocation} from 'react-router-dom';


function Protected(props) {
    const Comp=props.cmp
    const location=useLocation()
    const auth=localStorage.getItem("AccessToken")
    
  return (
    <div>
       {auth?<Comp/>:<Navigate to="/auth" state={{ from: location }} replace />}
    </div>
  )
}

export default Protected