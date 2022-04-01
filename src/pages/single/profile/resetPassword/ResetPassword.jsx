import React, { useState } from 'react'
import './resetpassword.scss'
const initialData={
    lastpqassword:'',
    newpassword:'',
    cnfrmpassword:''
}
function ResetPassword() {
    const [resetData, setResetData] = useState(initialData)
    const [msg, setMsg] = useState('')
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("reset data:-",resetData)
        if(resetData.newpassword===resetData.cnfrmpassword){
            setMsg("matched")
        }else{
            setMsg("not matched")
        }
    }
    const resetHandler=()=>{
        setResetData(initialData)
    }
    return (
        <div className='reset'>
            <form onSubmit={submitHandler} className='container'>
                <div className="formInput">
                    <input type="password" name='old_password' onChange={(e) => setResetData({ ...resetData, lastpqassword: e.target.value })} required placeholder='Old Password' value={resetData.lastpqassword} />
                </div>
                <div className="formInput">
                    <input type="password" name='old_password' onChange={(e) => setResetData({ ...resetData, newpassword: e.target.value })} required placeholder='New Password' value={resetData.newpassword}/>
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