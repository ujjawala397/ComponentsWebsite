import React from 'react';

import HomePage from './pages/Homepage';
import ContactPage from './pages/Contactpage';
import AboutPage from './pages/Aboutpage';
import Qard from './components/Qards/Qard';
import {Route, Routes} from 'react-router-dom';


const App = () =>{
  return(
    <div>
      
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/card" element={<Qard/>}/>

        </Routes>
    
    </div>
  )
}
export default App;