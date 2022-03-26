import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export const New = () => {
  const [file,setFile]=useState("")

  
  const filehandler=(e)=>{
    setFile(
     e.target.files[0]
    )
  }

  return (
    <div className='new'>
        <SideBar/>
        <div className="newContainer">
          <NavBar/>
         <div className="top">
           <h1>Add New Contact</h1>
         </div>
         <div className="bottom">
           <div className="left">
             <img src={
               file 
              ? URL.createObjectURL(file)
              : "https://th.bing.com/th/id/R.f0e484c12aa57292f9bd688eb98b3085?rik=oKU4f%2f1KkSEdQg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_511291.png&ehk=oFB4ZUkeplC7aajp5sRH1Q60BiZoT%2fAchk%2bbAHjN534%3d&risl=&pid=ImgRaw&r=0"} alt="img" />
           </div>
           <div className="right">
             <form action="">
                <div className="formInput">
                 <label htmlFor='file'>Image:<DriveFolderUploadIcon className='icon'/></label>
                 <input type="file" id='file' onChange={filehandler} style={{display:"none"}} />
               </div>
               <div className="formInput">
                 <label >Name</label>
                 <input type="text" placeholder='name' value={"suman sah"} />
               </div>
               <div className="formInput">
                 <label >Email</label>
                 <input type="email" placeholder='Email' value={"admin@admin.com"} />
               </div>
               <div className="formInput">
                 <label >Contact number</label>
                 <input type="number" placeholder='Phone Number' value={981521525} />
               </div>
               
               <div className="formInput">
                 <label >Address</label>
                 <input type="text" placeholder='Address'  />
               </div>
               <div className="formInput">
                 <label >Country</label>
                 <input type="text" placeholder='Contry'  />
               </div>
               
                <button>Save</button>
             </form>
           </div>
         </div>
        </div>
    </div>
  )
}
