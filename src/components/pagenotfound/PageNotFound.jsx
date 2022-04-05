import React from 'react'
import './pagenotfound.scss'
import image from '../../static/notfound/notfound.svg'
import {useNavigate} from 'react-router-dom'

function PageNotFound() {
  const navigate=useNavigate()
  const clickHandler=()=>{
    navigate('/')
  }
  return (
    <div className="pagenotfound">
      <div className="container">
        <img src={image} alt="" />
        <p>URL Not Found</p>
        <button onClick={clickHandler}>Go To Dashboard</button>
      </div>
    </div>
  )
}

export default PageNotFound