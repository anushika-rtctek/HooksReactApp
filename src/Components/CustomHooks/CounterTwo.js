import React, {useState} from 'react'
import useCounter from './Hooks/useCounter'

function CounterTwo() {

    const [count, increment, decrement, reset] = useCounter(10)

  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={increment}>Increment count</button>
        <button onClick={decrement}>Decrement count</button>
        <button onClick={reset}>Reset count</button>
    </div>
  )
}

export default CounterTwo
