import { Button } from '@mui/material'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Todo = () => {
    
    const [data,setData] = useState('')
    const [items,setItems] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
      }

    const addItem = () => {
      if(data){
        setItems([...items,data])
        setData('')
      }}
    const removeItem = (id) => {
      const updatedItems=items.filter((item,index)=>{
        return index!==id;
      })
      setItems(updatedItems);
      console.log(updatedItems);
    }
    const removeAllItems=()=>{
      setItems([]);
    }
  return (
    <div>
        
        <div>
          <Link to="/">Go back</Link>
        </div>

        <form onSubmit={handleSubmit}>
            <input 
              placeholder='enter task' 
              type="text" 
              value={data} 
              onChange={(e)=>setData(e.target.value)} />

            
              <Button onClick={addItem}>Add</Button>
            <div>
              {items.map((item,index)=>(
                <div key={index}>
                   {item} <Button onClick={()=>removeItem(index)}> Delete</Button>

                </div>
              ))}
            </div>
            
            <Button onClick={removeAllItems}>Remove All</Button>
        </form>

    </div>
  )
}

export default Todo