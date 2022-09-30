import React, {useState} from 'react'
import { Button, Input } from '@mui/material'
import { Link } from 'react-router-dom';


function SetStateClick() {
    const [data,setData]=useState({});
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(`${data.listItem}`)
    }
    
    return (
        <div>
            <div>
                <Link to="/">Go back</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <Input onChange={(e)=>{ setData ({ listItem:e.target.value }) }}/>
                <Button type="submit">Submit</Button>
            </form>
              
    </div>
  )
}

export default SetStateClick