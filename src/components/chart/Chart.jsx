import React, { useEffect, useState } from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  const [chart, setchart] = useState([])
  useEffect(() => {
    setchart(props.value)
  }, [props.value])
  return (
    <div className="chart">
      <div className="title">{props.title}</div>
      <ResponsiveContainer width="100%" aspect={props.aspect}>
        <AreaChart width={200} height={100} data={chart}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#28a745" stopOpacity={0.8} />
              <stop offset="85%" stopColor="#28a745" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke='gray' />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#28a745" fillOpacity={2} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart