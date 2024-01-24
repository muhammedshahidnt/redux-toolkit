import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../formSlice';

const Form = () => {
    const [Name, setname] = useState('');
    const [Age, setage] = useState();

    const dispatch = useDispatch()

    const { name, age } = useSelector((state => state.Form))
  return (
    <div>
         <input type="text" placeholder='type your name' value={Name} onChange={(e) => setname(e.target.value)} />
        <input type="number" placeholder='type your age' value={Age} onChange={(e) => setage(e.target.value)} />
        <button onClick={() => dispatch(submit({ Name, Age }))}>submtt</button>
        <div>
          <h1>
            Name: {name}
          </h1>
          Age:  {age}
        </div>
    </div>
  )
}

export default Form