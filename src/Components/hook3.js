import React from 'react'
import { useState } from 'react'



const hook3 = () => {



    const [name, setName]= useState({
        firstname:'',
        lastname:'',

    })

  return (
    <div>
<form>
    <input type='text' value={name.firstname} onChange={e => setName({firstname: e.target.value})}/>
    <input type='text' value={name.lastename} onChange={e => setName({lastname:e.target.values})}/>
    <h2>your first name - {name.firstname}</h2>
    <h2>your last name - {name.lastname}</h2>

</form>
    </div>
  )
}

export default hook3