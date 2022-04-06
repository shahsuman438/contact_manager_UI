
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Widget from '../../components/widgets/Widget'
import Tables from '../../components/table/Table'
import "./home.scss"
import { useState, useEffect } from 'react'
import authAxios from '../../interceptors/axios'


const dataDate = [
  {
    name: "Sunday",
    Total: 0
  },
  {
    name: "Monday",
    Total: 0
  },
  {
    name: "Tuesday",
    Total: 0
  },
  {
    name: "Wednesday",
    Total: 0
  },
  {
    name: "Thursday",
    Total: 0
  },
  {
    name: "Friday",
    Total: 0
  },
  {
    name: "Saturday",
    Total: 0
  }

];


export const Home = () => {
  const dateData = [
    {
      name: "1",
      date: '2022-04-06T06:51:27.207Z'
    },
    {
      name: "2",
      date: '2022-04-05T06:51:27.207Z'
    },
    {
      name: "3",
      date: '2022-04-04T06:51:27.207Z'
    },
    {
      name: "4",
      date: '2022-04-03T06:51:27.207Z'
    },
    {
      name: "5",
      date: '2022-04-02T06:51:27.207Z'
    },
    {
      name: "6",
      date: '2022-04-01T06:51:27.207Z'
    },
    {
      name: "7",
      date: '2022-03-31T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-04-06T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-04-06T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-04-06T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-04-05T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-04-02T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-04-04T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-03-31T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-03-05T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-03-02T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-03-04T06:51:27.207Z'
    },
    {
      name: "a",
      date: '2022-03-30T06:51:27.207Z'
    },
    {
      name: "xx",
      date: '2022-04-01T06:51:27.207Z'
    }

  ]
  const [contact, setContact] = useState([])
  const [contactCount, setContactCount] = useState(0)
  const [userCount, setUserCount] = useState(0)


  const get_data = async () => {
    await authAxios.get('/auth/users')
      .then(result => {
        setUserCount(result.data.length)
      })
      .catch(error => {
        if (error.response.status === 403) { console.log("call logout function") }
      })
  }
  const get_Contact = async () => {
    await authAxios.get('/contact')
      .then(result => {
        setContactCount(result.data.length)
        setContact(result.data)
      })
      .catch(error => {
        if (error.response.status === 403) { console.log("call logout function") }
      })
  }

  useEffect(() => {
    get_data()
  }, [])

  useEffect(() => {
    get_Contact()
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
          <Chart value={contact} />
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
