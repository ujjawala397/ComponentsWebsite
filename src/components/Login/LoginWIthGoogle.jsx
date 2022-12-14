import React from 'react'
import { GoogleLogin,googleLogout } from "@react-oauth/google";
import { createOrGetUser } from './response';
import useAuthStore from '../../store/authStore';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';
function LoginWithGoogle() {
    
    const{userProfile,addUser,removeUser} = useAuthStore();

    return (
        <div>            
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

        </div>
  )
}

export default LoginWithGoogle;