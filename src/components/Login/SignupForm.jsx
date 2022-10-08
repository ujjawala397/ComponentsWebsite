import React from 'react';
import { Link } from 'react-router-dom';
import { Input,Button } from '@mui/material';
import { useState } from 'react';
const SignupForm = () => {

    const [data,setData]=useState([]);

    function handleSubmit(){

    }
  return (
    <div>
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
            <Input placeholder='Enter Name' onChange={(e)=>(setData({...data,name:e.target.value}))}/>
            <br></br>   
            <Input placeholder='Enter Email'onChange={(e)=>(setData({...data,email:e.target.value}))}/>
            <br></br>
            <Input placeholder='Enter password' type="password" onChange={(e)=>(setData({...data,pass:e.target.value}))}/>
            <br></br>
            <Button type ="submit">SignUp</Button>
        </form>
    </div>
  )
}

export default SignupForm