import React, { useState } from 'react'

const Col1 = () => {
    const [count,setCount]=useState(0);
    const inc =() => { setCount(count+1)}
  return (
    <div>
      
    <button onClick={inc} > First Button : {count} </button>

    </div>
  )
}

export default Col1
