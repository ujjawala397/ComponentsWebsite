import { Button } from '@mui/material'
import React,{useState} from 'react'
import TodoList from './TodoList'
import { Link } from 'react-router-dom'
const Todo = () => {
    
    const [data,setData]=useState({listItem:'',work:''})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data.listItem)
      }

  return (
    <div>
      
        <div>
          <Link to="/">Go back</Link>
        </div>
        <form onSubmit={handleSubmit}>
            <input placeholder='enter task' value={data.listItem} onChange={(e)=>(setData({...data,listItem:e.target.value}))} />
            <br/>
            <input placeholder='enter work' value={data.work} onChange={(e)=>(setData({...data,work:e.target.value}))} />
            <Button type="submit">Add</Button>
        </form>

        <TodoList name={data.listItem}/>
    </div>
  )
}

export default Todo