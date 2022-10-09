import { Input,Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
const LoginForm = () => {
  
    const [data,setData]=useState({name:''});

    function handleSubmit(){
        
    }
    const responseSucessGoogle = (response) => {
        console.log(response)
    }
    const responseFailureGoogle = (response) => {
        console.log(response)
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
            <GoogleLogin
                clientId="1005337760285-v3kctt2qg09vukhkkt1amftftde5v932.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSucessGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </form>
    </div>
  )
}

export default LoginForm;