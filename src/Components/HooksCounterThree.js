import React, { useState } from 'react'

function HooksCounterThree() {
    const [name, setName] = useState({firstName: "", lastName: ""})
  return (
    <div>
      <input type='text' 
        value={name.firstName} 
        onChange={event => setName({ ...name, firstName: event.target.value})}/>
      <input type='text'
        value={name.lastName}
        onChange={event => setName({ ...name, lastName: event.target.value})}/>
      <h1>Your first name is {name.firstName}</h1>
      <h1>Your last name is {name.lastName}</h1>
    </div>
  )
}

export default HooksCounterThree
