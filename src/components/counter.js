import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrenent } from '../counterSlice';
 
const Counter = () => {
    const { conter1 } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
  return (
    <div>
          <button style={{ background: 'red' }} onClick={() => dispatch(increment())}>Increment</button>
      <h1>count: {conter1} </h1>
      <button style={{ background: 'red' }} onClick={() => dispatch(decrenent())}>Decrenent</button>

    </div>
  )
}

export default Counter