import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
const initialState={
  name:'',
  email:'',
  number:'',
  fav:'false',
  address:'',
  photo:[],

}

export const New = () => {
  const [file,setFile]=useState("")
  const [addData,setAddData]=useState(initialState)
  const authKey=localStorage.getItem('authorization')
  const authaxios=axios.create({
    baseURL:"http://localhost:4000/",
    headers:{
        Authorization:`Bearer ${authKey}`
    }
})

  const filehandler=(e)=>{
    setFile(
     e.target.files[0]
    )
    setAddData({...addData,photo:e.target.files[0]})
   
    
  }

  const submitHandler=(event)=>{
   try {
    const formData= new FormData()
    formData.append('photo',addData.photo)
    formData.append('name',addData.name)
    formData.append('email',addData.email)
    formData.append('number',addData.number)
    formData.append('fav',addData.fav)
    formData.append('address',addData.address)
    authaxios.post('contact',formData)
      .then( result=>{
        alert(JSON.stringify(result.data))
      })
      .catch(error=>{
      alert(error.response.data)
    })
   } catch (error) {
      console.log(error)
   }
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
                 <input type="file" id='file' onChange={filehandler} name="photo" style={{display:"none"}} />
               </div>
               <div className="formInput">
                 <label >Favourite</label>
                 <Checkbox onChange={(e)=>setAddData({...addData,fav:e.target.checked})} name="fav" color="primary" />
               </div>
               <div className="formInput">
                 <label >Name</label>
                 <input type="text" placeholder='Name' required onChange={(e)=>setAddData({...addData,name:e.target.value})} name="name" value={addData.name} />
               </div>
               <div className="formInput">
                 <label >Email</label>
                 <input type="email" placeholder='Email' required onChange={(e)=>setAddData({...addData,email:e.target.value})} name="email" value={addData.email} />
               </div>
               <div className="formInput">
                 <label >Contact number</label>
                 <input type="number" placeholder='Phone  Number' required  onChange={(e)=>setAddData({...addData,number:e.target.value})} name="number" value={addData.number} />
               </div>
               
               <div className="formInput">
                 <label >Address</label>
                 <input type="text" placeholder='Address' required onChange={(e)=>setAddData({...addData,address:e.target.value})} name="address" value={addData.address} />
               </div>
                <button type='submit'>Save</button>
             </form>
           </div>
         </div>
        </div>
    </div>
  )
}
