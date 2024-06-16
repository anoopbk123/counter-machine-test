import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Title from './Components/Title';
import CounterCard from './Components/CounterCard';
import SumCard from './Components/SumCard';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './Redux/counter1Slice';

function App() {
  const [showTitle, setShowTitle] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setShowTitle(true)
    }, 3000)
  }, [])
  const count = useSelector(store=>store.count)
  const dispatch = useDispatch()
  return (
    <div className='text-center app m-auto border-dark border-3 border rounded-4 my-5 border-opacity-100'>
     {showTitle && <Title/>}
     {
      count.map(item=>(
        
        <div className="container my-5" key={item.id}>
        <CounterCard count = {item.value} number={item.id} max={item.max} />
     </div>
        
      ))
     }

     <div>
      <button onClick={()=>{dispatch(reset())}} className='btn btn-danger mx-1'>Reset</button>
     </div>
     <div>
      <SumCard/>
     </div>
    </div>
  )
}

export default App
