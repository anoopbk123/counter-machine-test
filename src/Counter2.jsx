import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from './Redux/counterSlice2'

export default function Counter2() {
    const count = useSelector(store=>store.count2)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter 2</h1>
      <button className="btn btn-primary" onClick={()=>{
        dispatch(change(-1))
      }}>-</button>
      <span className='mx-2'>Count2 {count}</span>
      <button className="btn btn-primary" onClick={()=>{
        dispatch(change(1))
      }}>+</button>
    </div>
  )
}
