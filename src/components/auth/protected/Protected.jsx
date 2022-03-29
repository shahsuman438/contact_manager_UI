import React from 'react'

function Protected(props) {
  return (
    <div>
        <props.cmp/>
    </div>
  )
}

export default Protected