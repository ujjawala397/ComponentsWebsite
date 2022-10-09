import React from 'react';
import { Link } from 'react-router-dom';
import { Input,Button } from '@mui/material';
import { useState } from 'react';
const SignupForm = () => {

    const [data,setData]=useState({name:'',email:'',pass:''});
    function handleSubmit(e){
        
        e.preventDefault();
        console.log(data)
        setData({name:'',email:'',pass:''})
        
    }

  return (
    <div>
        <Link to="/">Home</Link>

        <form onSubmit={handleSubmit}>
            <Input 
                placeholder='Enter Name'  
                type="text"
                value={data.name} 
                onChange={(e)=>(setData({...data,name:e.target.value}))}
            />
            <br></br>   
            <Input 
                placeholder='Enter Email' 
                type="text"
                value={data.email} 
                onChange={(e)=>(setData({...data,email:e.target.value}))}
            />
            <br></br>
            <Input 
                placeholder='Enter password' 
                value={data.pass} 
                type="password"
                onChange={(e)=>(setData({...data,pass:e.target.value}))}/>
            <br></br>
            <Button type ="submit">SignUp</Button>
        </form>
    </div>
  )
}

export default SignupForm