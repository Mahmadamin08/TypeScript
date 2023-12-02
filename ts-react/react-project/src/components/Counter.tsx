import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const [counter1, setCounter1] = useState(0) // automatic number
  return (
    <div>
      Count :- {counter}
      <button onClick={()=> setCounter(prev => prev+1)}>+</button>
      <button onClick={()=> setCounter(prev => prev-1)}>-</button>
    </div>
  )
}

export default Counter
