import { Input,Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  
    const [data,setData]=useState({name:''});

    function handleSubmit(){
        
    }
    return (
    <div>
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
            <Input placeholder='Enter Email'onChange={(e)=>(setData({...data,email:e.target.value}))}/>
            <br></br>
            <Input placeholder='Enter password' type="password" onChange={(e)=>(setData({...data,pass:e.target.value}))}/>
            <br></br>
            <Button type ="submit">Login</Button>
        </form>
    </div>
  )
}

export default LoginForm;