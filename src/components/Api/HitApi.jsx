import { useState } from 'react';
import {useEffect} from 'react';
const HitApi = () => {

    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(response=>setUsers(JSON.stringify(response)))
    },[])
    
  return (
    <div> 
      {users}
      {/* {users.map(buddy=>(
        <h1 key={buddy.id}>{buddy.name}</h1>
      ))} */}

    </div>
  )
}

export default HitApi;