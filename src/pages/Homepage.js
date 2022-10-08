import React from 'react';
import {Link} from 'react-router-dom';
import { Stack } from '@mui/system';
import Navbar from '../components/Navbar/Navbar';


const HomePage = () => {
    return (
        <div>
           <Navbar/>
           <Stack style={{position:'absolute'}}>hii</Stack>
           <div>rtet</div>
           <div>rtet</div>
           <div>rtet</div>
           <div>rtet</div>
           <div>rtet</div>
            <div>
                <li><Link to="setStateClass">OnChange State will change By class</Link></li>
                <li><Link to="setStatefunction">OnChange State will change by function</Link></li>
                <li><Link to="setStateOnClick">OnClick State will change by function(incomplete)</Link></li>
                <li><Link to="stateDataTraverse">Map Travere on state data</Link></li>
                <li><Link to="card">Card</Link></li>
                <li><Link to="todoApp">Todo App</Link></li>
                <li><Link to="hitApi">Hit Api</Link></li>
                <li><Link to="signin">SignIn</Link></li>
                <li><Link to="signup">SignUp</Link></li>
            </div>
           
        </div>
    )
}
export default HomePage;