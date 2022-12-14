import { Input,Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import LoginWithGoogle from './LoginWIthGoogle';
const LoginForm = ({setLoginUser}) => {
  
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:"",
        pass:""
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        const {name, value}=e.target
        setData({
            ...data,
            [name]:value
        })
        
    }

    const login=()=>{
        axios.post("http://localhost:5000/login",data)
        .then(res=>{
            alert(res.data.message + res.data.user._id)
            setLoginUser(res.data.user)
            navigate('/')
        })

    }

    return (
    <div>
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
            <Input placeholder='Enter Email'onChange={(e)=>(setData({...data,email:e.target.value}))}/>
            <br></br>
            <Input placeholder='Enter password' type="password" onChange={(e)=>(setData({...data,pass:e.target.value}))}/>
            <br></br>
            <Button type ="submit" onClick={login}>Login</Button>
            <Button onClick={()=> navigate('/signup')}>Register</Button>
            <LoginWithGoogle/>
            
            
        </form>
    </div>
  )
}

export default LoginForm;