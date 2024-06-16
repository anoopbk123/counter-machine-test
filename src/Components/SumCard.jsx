import React from 'react'
import { useSelector } from 'react-redux'

export default function SumCard() {
    const count = useSelector(store=>store.count)
    const sum = count.reduce((t,item)=>{
        return item.value+t
    },0)
  return (
    <div className='m-3 bg-warning fs-2 rounded-3'>Sum {sum}</div>
  )
}
