
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Widget from '../../components/widgets/Widget'
import Tables from '../../components/table/Table'
import "./home.scss"
import { useState, useEffect } from 'react'
import authAxios from '../../interceptors/axios'

export const Home = () => {
  const [contact, setContact] = useState([])
  const [contactCount, setContactCount] = useState(0)
  const [userCount, setUserCount] = useState(0)

  useEffect( () => {
    async function get_data(){
      await authAxios.get('/auth/users')
      .then(result => {
        setUserCount(result.data.length)
      })
      .catch(error => {
        if (error.response.status === 403) { console.log("call logout function") }
      })
    await authAxios.get('/contact')
      .then(result => {
        setContactCount(result.data.length)
        setContact(result.data)
      })
      .catch(error => {
        if (error.response.status === 403) { console.log("call logout function") }
      })
    }
    get_data()

  }, [])

  return (
    <div className='home'>
      <SideBar />
      <div className="homecontainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" count={userCount} />
          <Widget type="Contacts" count={contactCount} />
          {/* <Widget  type="order" count={200}/>
           <Widget  type="balance" count={2159}/> */}
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest 5 Transaction
          </div>
          <Tables value={contact.slice(-5).reverse()} />
        </div>
      </div>
    </div>
  )
}
