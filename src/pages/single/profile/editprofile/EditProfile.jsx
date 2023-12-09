import React, { useState, useEffect } from 'react'
import './editprofile.scss'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import Popup from '../../../../components/popup/Popup'
import ResetPassword from '../resetPassword/ResetPassword'
import { toast } from 'react-toastify'
import authAxios from '../../../../interceptors/axios'

function EditProfile (props) {
  const [openPopup, setOpenPopup] = useState(false)
  const [addData, setAddData] = useState(props.value)
  const [imageLink, setImageLink] = useState('')
  var domeImage = 'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
  useEffect(() => {
    setImageLink(
      addData.photo ? `${process.env.REACT_APP_API_URL}/` + addData.photo : domeImage
    )
  }, [])

  const filehandler = e => {
    createImageLink(e.target.files[0])
    setAddData({ ...addData, photo: e.target.files[0] })
  }
  const createImageLink = e => {
    setImageLink(URL.createObjectURL(e))
  }

  const submitHandler = event => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('photo', addData.photo)
      formData.append('name', addData.name)
      formData.append('phone', addData.phone)
      formData.append('country', addData.country)
      formData.append('address', addData.address)
      authAxios
        .put(`auth/user/profile`, formData)
        .then(result => {
          toast.success(result.data.msg, {
            position: 'top-center'
          })
        })
        .catch(error => {
          alert(error.response.data)
          toast.error(error.response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  const editHandler = () => {
    setOpenPopup(true)
  }
  return (
    <div className='editProfile'>
      <form className='container' onSubmit={submitHandler}>
        <div className='top'>
          <div className='photo'>
            <img src={imageLink} alt='' />
            <label htmlFor='file'>
              <FileUploadIcon className='icon' />
            </label>
            <input
              type='file'
              onChange={filehandler}
              id='file'
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <hr />
        <div className='bottom'>
          <div className='formInput'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              required
              onChange={e => setAddData({ ...addData, name: e.target.value })}
              placeholder='Name'
              value={addData.name}
            />
          </div>
          {/* <div className="formInput">
                        <label >Email</label>
                        <input type="email" name='email' disabled onChange={(e) => setAddData({ ...addData, email: e.target.value })} placeholder='Email' value={addData.email}/>
                    </div> */}
          <div className='formInput'>
            <label>Phone</label>
            <input
              type='number'
              name='phone'
              required
              onChange={e => setAddData({ ...addData, phone: e.target.value })}
              placeholder='Phone Number'
              value={addData.phone}
            />
          </div>
          <div className='formInput'>
            <label>Address</label>
            <input
              type='text'
              name='address'
              required
              onChange={e =>
                setAddData({ ...addData, address: e.target.value })
              }
              placeholder='Address'
              value={addData.address}
            />
          </div>
          <div className='formInput'>
            <label>Country</label>
            <input
              type='text'
              name='country'
              required
              onChange={e =>
                setAddData({ ...addData, country: e.target.value })
              }
              placeholder='Counter'
              value={addData.country}
            />
          </div>

          <div className='formInput'>
            <div className='action'>
              <button type='submit' className='updatebtn'>
                Update
              </button>
              {/* <button type='button' >Reset</button> */}
              <button type='button' onClick={editHandler}>
                Change Password
              </button>
            </div>
          </div>
        </div>
      </form>
      <Popup
        title='Change password'
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ResetPassword />
      </Popup>
    </div>
  )
}

export default EditProfile
