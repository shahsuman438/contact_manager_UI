
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Widget from '../../components/widgets/Widget'
import Tables from '../../components/table/Table'
import "./home.scss"
export const Home = () => {
  return (
    <div className='home'>
       <SideBar/>
       <div className="homecontainer">
         <NavBar/>
         <div className="widgets">
           <Widget type="user"/>
           <Widget  type="Contacts"/>
           <Widget  type="order"/>
           <Widget  type="balance"/>
         </div>
         {/* <div className="charts">
           <Featured/>
           <Chart/>
         </div> */}
         <div className="listContainer">
           <div className="listTitle">
             Latest Transaction
           </div>
           <Tables/>
         </div>
       </div>
    </div>
  )
}
