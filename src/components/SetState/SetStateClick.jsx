import React, {useState} from 'react'
import { Button, Input } from '@mui/material'
import { Link } from 'react-router-dom';


function SetStateClick() {
    const [data,setData]=useState([]);
    const [res,setRes]=useState([]);
    function handleSubmit(e){
        e.preventDefault();
        console.log(data)
        //How to Show div? 
        // Task done below
    }
    function addData(){
        setRes(data)
    }
    
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <Input onChange={(e)=>{ setData([e.target.value])}}/>
                <Button type="submit" onClick={addData}>Submit</Button>
            </form>
            
            {res.map((data,index)=>(
                <div key={index}>{data}</div>
            ))}
    </div>
  )
}

export default SetStateClick