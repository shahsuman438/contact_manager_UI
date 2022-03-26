import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Contacts</h1>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={ 75} text={"70%"} strokeWidth={5}/>

        </div>
         <p className="title">Total sales made today</p>
         <p className="amount">$450</p>
         <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.  </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult">
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured