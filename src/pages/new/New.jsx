import React, { useEffect, useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Checkbox from '@mui/material/Checkbox';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import authAxios from '../../interceptors/axios';
import CloseIcon from '@mui/icons-material/Close';

const initialState = {
  name: '',
  email: '',
  number: [],
  fav: false,
  address: '',
  photo: [],

}


export const New = () => {
  const BaseURL = `${process.env.REACT_APP_API_URL}/`
  const { id } = useParams()
  const [addData, setAddData] = useState(initialState)
  const [title, setTitle] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [button, setButton] = useState('')
  const [contactType, setContactType] = useState([])

  var domeImage = 'https://fupping.com/wp-content/uploads/2018/06/Personal.png'
  useEffect(() => {
    if (id) {
      setButton("Update")
      setTitle("View Contact")
      authAxios.get(`contact/${id}`)
        .then(result => {
          setAddData(result.data)
          setContactType(result.data.number)
          setImageLink(result.data.photo ? BaseURL + result.data.photo : domeImage)
        })
        .catch(error => {
          alert(error.response.data)
        })
    } else {
      setButton("Create")
      setImageLink(domeImage)
      setTitle("Add New Contact")
    }
  }, [])

  const filehandler = (e) => {
    createImageLink(e.target.files[0])
    setAddData({ ...addData, photo: e.target.files[0] })
  }
  const createImageLink = (e) => {
    setImageLink(URL.createObjectURL(e))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    try {
      console.log("submit handler called")
      const formData = new FormData()
      formData.append('photo', addData.photo)
      formData.append('name', addData.name)
      formData.append('email', addData.email)
      formData.append('number',JSON.stringify(contactType))
      formData.append('fav', addData.fav)
      formData.append('address', addData.address)
      if (id) {
        console.log("with Id",formData)
        console.log("with Id",contactType)
        authAxios.put(`contact/${id}`, formData)
          .then(result => {
            toast.success(JSON.stringify(result.data.msg))
          })
          .catch(error => {
            toast.error(error.response.data)

          })

      } else {
        console.log("without Id",formData)
        console.log("without Id",addData)
        authAxios.post('contact', formData)
          .then(result => {
            toast.success(JSON.stringify(result.data.msg))
          })
          .catch(error => {
            toast.error(error.response.data)

          })
      }
    } catch (error) {
      toast.error(error)
    }
  }
  const contactHandler = (index, e) => {
    const values = [...contactType]
    values[index][e.target.name] = e.target.value
    setContactType(values)
  }
  const removeHandler = (index) => {
    const values = [...contactType]
    values.splice(index, 1)
    setContactType(values)
  }
  const addHandler = () => {
    setContactType([...contactType, { name: '', number: '' }])
  }
  return (
    <div className='new'>
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={imageLink} alt="img" />
          </div>
          <div className="right formInputdiv">
            <form onSubmit={submitHandler}>
              <div className="formInput">
                <label htmlFor='file'>Image:<DriveFolderUploadIcon className='icon' /></label>
                <input type="file" id='file' onChange={filehandler} name="photo" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label >Favourite</label>
                <Checkbox onChange={(e) => setAddData({ ...addData, fav: e.target.checked })} name="fav" checked={addData.fav} color="primary" />
              </div>
              <div className="formInput">
                <label >Name</label>
                <input type="text" placeholder='Name' required onChange={(e) => setAddData({ ...addData, name: e.target.value })} name="name" value={addData.name} />
              </div>
              <div className="formInput">
                <label >Email</label>
                <input type="email" placeholder='Email' required onChange={(e) => setAddData({ ...addData, email: e.target.value })} name="email" value={addData.email} />
              </div>
              <div className="formInput address">
                <label >Address</label>
                <input type="text" placeholder='Address' required onChange={(e) => setAddData({ ...addData, address: e.target.value })} name="address" value={addData.address} />
              </div>
              {
                contactType.map((contact, index) =>
                  <div className="contact" key={index}>
                    <div className="formInput">
                      <label >Contact Type</label>
                      <input type="text" placeholder='Contact Type' value={contact.name} required onChange={(e) => contactHandler(index, e)} name="name" />
                    </div>
                    <div className="formInput">
                      <label >Contact Number</label>
                      <input type="number" placeholder='Phone  Number' value={contact.number} required onChange={(e) => contactHandler(index, e)} name="number" />
                    </div>
                    <div className="action">
                      <CloseIcon className='remove' onClick={() => removeHandler(index)} />
                    </div>
                  </div>
                )
              }
              <div className="actionbtn">
                <button type='submit' className='addbtn'>{button}</button>
                <button type='button'  onClick={() => addHandler()} >Add Contact</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
