import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Checkbox from '@mui/material/Checkbox';

const initialState={
  name:'',
  email:'',
  number:'',
  fav:'',
  address:'',
  photo:''

}

export const New = () => {
  const [file,setFile]=useState("")
  const [addData,setAddData]=useState(initialState)
  console.log()
  
  const filehandler=(e)=>{
    setFile(
     e.target.files[0]
    )
    setAddData({...addData,photo:e.target.files[0]})
  }
  const submitHandler=(event)=>{
    console.log(addData)
    event.preventDefault()
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
             <form onSubmit={submitHandler}>
                <div className="formInput">
                 <label htmlFor='file'>Image:<DriveFolderUploadIcon className='icon'/></label>
                 <input type="file" id='file' onChange={filehandler} style={{display:"none"}} />
               </div>
               <div className="formInput">
                 <label >Favourite</label>
                 <Checkbox onChange={(e)=>setAddData({...addData,fav:e.target.checked})}  color="primary" />
               </div>
               <div className="formInput">
                 <label >Name</label>
                 <input type="text" placeholder='name' onChange={(e)=>setAddData({...addData,name:e.target.value})} value={addData.name} />
               </div>
               <div className="formInput">
                 <label >Email</label>
                 <input type="email" placeholder='Email' onChange={(e)=>setAddData({...addData,email:e.target.value})} value={addData.email} />
               </div>
               <div className="formInput">
                 <label >Contact number</label>
                 <input type="number" placeholder='Phone  Number'  onChange={(e)=>setAddData({...addData,number:e.target.value})} value={addData.number} />
               </div>
               
               <div className="formInput">
                 <label >Address</label>
                 <input type="text" placeholder='Address' onChange={(e)=>setAddData({...addData,address:e.target.value})}  value={addData.address} />
               </div>
                <button type='submit'>Save</button>
             </form>
           </div>
         </div>
        </div>
    </div>
  )
}
