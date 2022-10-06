import React, { Component } from 'react'
import { Input } from '@mui/material';
import { Link } from 'react-router-dom';
class SetStateClass extends Component {
    constructor(){
        super();
        this.state={
            name:"React user"
        }
    }
    
    render() {
        
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>Hi! My name is {this.state.name}</div>
            <Input onChange={(e)=>this.setState({name:e.target.value})} />
            <button >User Name</button>
        </div>
    )
  }
}

export default SetStateClass;