import React from 'react';
import Qard from '../components/Qards/Qard';
import Navbar from '../components/Navbar/Navbar';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
           <Navbar/>
           <Link to="/card">Card</Link>
        </div>
    )
}
export default HomePage;