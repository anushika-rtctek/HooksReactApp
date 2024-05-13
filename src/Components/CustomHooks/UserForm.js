import React, { useState } from 'react'
import useInput from './Hooks/useInput'

function UserForm() {

    const [fname, bindFname, resetFname] = useInput('')
    const [lname, bindLname, resetLname] = useInput('')

    const submitHandler = (event) => {
        event.preventDefault()
        alert(`Hello ${fname} ${lname}`)
        resetFname()
        resetLname()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input {...bindFname} type='text' />
            </div>
            <div>
                <label>Last Name</label>
                <input {...bindLname} type='text' />
            </div>
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default UserForm
