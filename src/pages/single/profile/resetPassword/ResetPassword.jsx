import React, { useState } from 'react'
import './resetpassword.scss'
import axios from 'axios'
import { useNavigate } from 'react-router'

const initialData = {
    lastpqassword: '',
    newpassword: '',
    cnfrmpassword: ''
}
function ResetPassword() {
    const [resetData, setResetData] = useState(initialData)
    const [msg, setMsg] = useState('')
    const authKey = localStorage.getItem('authorization')
    const authaxios = axios.create({
        baseURL: "http://localhost:4000/",
        headers: {
            Authorization: `Bearer ${authKey}`
        }
    })
    const navigate = useNavigate()
    const submitHandler = (event) => {
        event.preventDefault()
        if (resetData.newpassword === resetData.cnfrmpassword) {
            try {
                authaxios.post('auth/user/reset', resetData)
                    .then(result => {
                        alert(result.data.msg+" you will be logout")
                        localStorage.removeItem("authorization")
                        navigate('/auth')
                    })
                    .catch(error => {
                        setMsg(error.response.data.msg)
                    })
            } catch (error) {
                console.log(error)
            }
        } else {
            setMsg("Confirm Password not Matched")
        }
    }
    const resetHandler = () => {
        setResetData(initialData)
    }
    return (
        <div className='reset'>
            <form onSubmit={submitHandler} className='container'>
                <div className="formInput">
                    <input type="password" name='old_password' onChange={(e) => setResetData({ ...resetData, lastpqassword: e.target.value })} required placeholder='Old Password' value={resetData.lastpqassword} />
                </div>
                <div className="formInput">
                    <input type="password" name='old_password' onChange={(e) => setResetData({ ...resetData, newpassword: e.target.value })} required placeholder='New Password' value={resetData.newpassword} />
                </div>
                <div className="formInput">
                    <input type="password" name='old_password' onChange={(e) => setResetData({ ...resetData, cnfrmpassword: e.target.value })} required placeholder='Confirm Password' value={resetData.cnfrmpassword} />
                </div>
                <p className='msg'>{msg}</p>
                <div className="action">
                    <button type='submit' className='submit'>Submit</button>
                    <button type='button' className='reset' onClick={resetHandler}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword