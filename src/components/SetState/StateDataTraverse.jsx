import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function StateDataTraverse() {

    const [data]=useState(
        {
            people:[
                {
                    name:'Jojo',
                    id:"1"
                },
                {
                    name:'Ram',
                    id:"2"
                },
                {
                    name:'Krishna',
                    id:3
                }
            ]
        });


  return (
    <div>

        <Link to="/">Home</Link>
        {data.people.map(buddy=>(
        <h1 key={buddy.id}>{buddy.name}</h1>
    ))}
    </div>
  )
}

export default StateDataTraverse