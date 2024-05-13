import React, {useState} from 'react'
import useCounter from './Hooks/useCounter'

function CounterOne() {

    const [count, increment, decrement, reset] = useCounter(0, 5)

  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={increment}>Increment count</button>
        <button onClick={decrement}>Decrement count</button>
        <button onClick={reset}>Reset count</button>
    </div>
  )
}

export default CounterOne
