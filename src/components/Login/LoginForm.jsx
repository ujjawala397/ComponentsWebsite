import { Input,Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import { createOrGetUser } from './response';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import useAuthStore from '../../store/authStore';
import { Image } from 'react-bootstrap';
const LoginForm = ({setLoginUser}) => {
  
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:"",
        pass:""
    });
    const{userProfile,addUser,removeUser} = useAuthStore();
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
                    {
                    userProfile?
                        (   <div>
                                <div>{userProfile.userName}</div>
                                <div>
                                    <Image
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                        src={userProfile.image}
                                        alt="Profile img"
                                    />
                                </div>
                                <div>{userProfile.emailId}</div>
                                <div><Button onClick={()=>{
                                        googleLogout()
                                        removeUser()
                                    }}>Log Out</Button></div>
                            </div>
                        )
                        :
                        <GoogleLogin 
                            onSuccess={(response)=>createOrGetUser(response,addUser)}
                            onError={()=>console.log("error")}
                        /> 
                }


            <Button type ="submit" onClick={login}>Login</Button>
            <Button onClick={()=> navigate('/signup')}>Register</Button>
            
            
        </form>
    </div>
  )
}

export default LoginForm;