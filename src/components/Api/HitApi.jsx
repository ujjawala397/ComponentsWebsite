import { useState } from 'react';
import {useEffect} from 'react';
const HitApi = () => {

    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(response=>setUsers(response))
    },[])
    
  return (
    <div> 
      {users.map(user=>(
        <div key={user.id}>
          <h1>
            {user.id} Name: {user.name}
          </h1>
          <h4>Contact: {user.phone}</h4>
          <br></br>
        </div>
        
      ))}

    </div>
  )
}

export default HitApi;