import React from 'react'
import { useState } from 'react'

const Hooks useState = () => {
    const[count , setCount]= useState(0)

     
  return (
    <div>
        
        <button onClick={setCount}>count{count +1 } count</button>
    </div>
  )
}

export default Hooks usestate;