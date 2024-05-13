import React from 'react'
import {UserContext, AreaContext} from '../../App.js'

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <AreaContext.Consumer>
                            {
                                area => {
                                    return <div>User context value {user} and Area Context value is {area}</div>
                                }
                            }
                        </AreaContext.Consumer>
                    ) 
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
