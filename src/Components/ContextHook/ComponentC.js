import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, AreaContext } from '../../App'

function ComponentC() {
    const user = useContext(UserContext)
    const area = useContext(AreaContext)
  return (
    <div>
        {user} - {area}
    </div>
  )
}

export default ComponentC
