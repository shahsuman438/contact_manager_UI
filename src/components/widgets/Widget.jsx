import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PaidIcon from '@mui/icons-material/Paid';
import BalanceIcon from '@mui/icons-material/Balance';
const Widget = (props) => {
  let data;
  const {type,count}=props
  switch(type){
    case "user":
      data={
        title:"USER",
        isMoney:false,
        link:"Seel all Users",
        icon:<PersonIcon className="icon" style={{color:"crimson",backgroundColor:"rgb(255,0,0,0.2)"}}/>
      }
      break;
    case "Contacts":
      data={
        title:"CONTACTS",
        isMoney:false,
        link:"Seel all contact",
        icon:<PermContactCalendarIcon className="icon" style={{color:"blue",backgroundColor:"rgb(0,0,255,0.2)"}}/>
      }
      break;
    case "Global Contact":
      data={
          title:"TOTAL CONTACTS",
          isMoney:false,
          link:"Seel all earnings",
          icon:<PaidIcon className="icon" style={{color:"green",backgroundColor:"rgb(0,255,0,0.2)"}}/>
        }
        break;
    case "balance":
        data={
          title:"BALANCE",
          isMoney:true,
          link:"Seel all earnings",
          icon:<BalanceIcon className="icon" style={{color:"blue",backgroundColor:"rgb(0,0,255,0.2)"}}/>
        }
        break;
    default:
  }
  return (
    <div className="widget">
       <div className="left">
         <span className="title">{data.title}</span>
         <span className="counter">{data.isMoney?`$${count}`:count}</span>
         <span className="link">{data.link}</span>
       </div>
       <div className="right">
         <div className="percentage positive">
         {<KeyboardArrowUpIcon/>}
           20%</div>
          {data.icon}
       </div>
    </div>
  )
}

export default Widget