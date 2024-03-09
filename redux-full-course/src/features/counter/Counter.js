import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByValue,reset } from './CounterSlice';
const Counter = () => {
    const count= useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const[incrementByVal,setIncrementByVal] = useState(0)
    const addVal = Number(incrementByVal) || 0
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <input type="text" 
            onChange={(e)=>setIncrementByVal(e.target.value)}
            value = {incrementByVal}
            />
            <button onClick={()=> dispatch(incrementByValue(addVal))}>increment By value</button>
        </div>
    );
}

export default Counter;
