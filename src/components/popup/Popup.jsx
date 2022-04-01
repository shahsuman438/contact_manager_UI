import React from 'react'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close';
import './popup.scss'
function Popup(props) {
    const {title,children,openPopup,setOpenPopup}=props
    const closeHandler=()=>{
        setOpenPopup(false)
    }
  return (
    <div>
        <Dialog open={openPopup} maxWidth="md">
            <DialogTitle>
                <div className='Title'>
                    <p>{title}</p>
                    <button onClick={closeHandler}><CloseIcon className='icon'/></button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <div>
                   {children}
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Popup