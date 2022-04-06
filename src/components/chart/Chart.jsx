import React, { useEffect, useState } from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  const [chart, setChart] = useState(
    [
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
    
    ] 
  )
  const data = props.value
  const [tempData,setTempData]=useState([])
  useEffect(() => {
    const filteredData = data.filter(
      item => {
        var sixDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
        return new Date(item.created).getTime() > sixDaysAgo.getTime()
      }
    )
    console.log("Filtered data", filteredData)
    filteredData.map(data => {
      const date = new Date(data.created)
      var day = date.toLocaleString('en-us', { weekday: 'long' })
      var intday = date.getDay()
      const prevValues = [...chart]
      prevValues[intday]['Total'] += 1
      setChart(prevValues)
    })
    sortData()
    // setTempData(tempData=>[...tempData,chart[3]])
    // setTempData(tempData=>[...tempData,chart[2]])
    // console.log("temp data",tempData)
    return () => { 
      setChart() 
      console.log('charts:-', chart)  
    }
  }, [data])  
  const sortData=()=>{
    var todayDateIndex=new Date().getDay()
    console.log(todayDateIndex)
    // for(var i=todayDateIndex;i<)

    console.log(chart)
  }

  return (
    <div className="chart">
      <div className="title">Last week total contact</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart width={730} height={250} data={chart}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke='gray' />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart