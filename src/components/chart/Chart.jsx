import React from 'react'
import './chart.scss'
import { AreaChart,Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name:"Sunday",
    Total:1200
  },
  {
    name:"Monday",
    Total:1100
  },
  {
    name:"Tuesday",
    Total:100
  },
  {
    name:"Wednesday",
    Total:1200
  },
  {
    name:"Thursday",
    Total:1300
  },
  {
    name:"Friday",
    Total:700
  },
  {
    name:"Saturday",
    Total:500
  }
    
];
const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last week total contact</div>
       <ResponsiveContainer width="100%" aspect={2/1}>
              <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
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