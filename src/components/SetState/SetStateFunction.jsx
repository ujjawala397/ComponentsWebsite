import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Todo = () => {
    
    const [data,setData]=useState({listItem:''})
  return (
    <div>
      
        
        <div>
            <Link to="/">Home</Link>
        </div>
        <input placeholder='enter string' value={data.listItem} onChange={(e)=>(setData({...data,listItem:e.target.value}))} />
        <div>  You wrote : {data.listItem} </div>
    </div>
  )
}

export default Todo