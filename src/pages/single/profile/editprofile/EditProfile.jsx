import React from 'react'
import './editprofile.scss'
import FileUploadIcon from '@mui/icons-material/FileUpload';

function EditProfile(props) {
    console.log(props)
  return (
    <div className='editProfile'>
        <form className="container">
            <div className="top">
                <div className="photo">
                    <img src="https://www.teahub.io/photos/full/55-556989_man-with-bushy-beard.jpg" alt="" />
                    <label htmlFor="file" ><FileUploadIcon className='icon' /></label>
                    <input type="file" id='file' style={{ display: "none" }} />
                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="formInput">
                    <label >Name</label>
                    <input type="text" name='name' placeholder='Name'  />
                </div>
                <div className="formInput">
                    <label >Email</label>
                    <input type="email" name='email' placeholder='Email' />
                </div>
                <div className="formInput">
                    <label >Phone</label>
                    <input type="number" name='name' placeholder='Phone Number' />
                </div>
                <div className="formInput">
                    <label >Address</label>
                    <input type="text" name='address' placeholder='Address' />
                </div>
                <div className="formInput">
                    <label >Country</label>
                    <input type="text" name='country' placeholder='Counter' />
                </div>
                
                <div className="formInput">
                    <div className="action">
                        <button type='submit' className='updatebtn'>Update</button>
                        <button type='submit' >Reset Password</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditProfile