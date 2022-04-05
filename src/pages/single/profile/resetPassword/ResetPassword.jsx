import React, { useState } from 'react'
import './resetpassword.scss'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import authAxios from '../../../../interceptors/axios'
const initialData = {
    lastpqassword: '',
    newpassword: '',
    cnfrmpassword: ''
}
function ResetPassword() {
    const [resetData, setResetData] = useState(initialData)
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()
    const submitHandler = (event) => {
        event.preventDefault()
        if (resetData.newpassword === resetData.cnfrmpassword) {
            try {
                authAxios.post('auth/user/reset', resetData)
                    .then(result => {
                        localStorage.removeItem("authorization")
                        navigate('/auth')
                        toast.success(result.data.msg)

                    })
                    .catch(error => {
                        setMsg(error.response.data.msg)
                        toast.error(error.response.data.msg)
                    })
            } catch (error) {
                console.log(error)
            }
        } else {
            setMsg("Confirm Password not Matched")
            toast.warn("Confirm Password not Matched")
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