import React from 'react';
import HomePage from './pages/Homepage';
import ContactPage from './pages/Contactpage';
import AboutPage from './pages/Aboutpage';
import Qard from './components/Qards/Qard';
import Todo from './components/TodoApp/Todo';
import {Route, Routes} from 'react-router-dom';
import SetStateFunction from './components/SetState/SetStateFunction';
import SetStateClass from './components/SetState/SetStateClass';
import SetStateClick from './components/SetState/SetStateClick';
import StateDataTraverse from './components/SetState/StateDataTraverse';
import HitApi from './components/Api/HitApi';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Login/SignupForm';


const App = () =>{
  return(
    <div>
      
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/card" element={<Qard/>}/>
          <Route path="/todoApp" element={<Todo/>}/>
          <Route path="/setStateClass" element={<SetStateClass/>}/>
          <Route path='/setStateFunction' element={<SetStateFunction/>}/>
          <Route path='/setStateOnClick' element={<SetStateClick/>}/>
          <Route path='/stateDataTraverse' element={<StateDataTraverse/>}/>
          <Route path='/hitApi' element={<HitApi/>}/>
          <Route path='/signin' element={<LoginForm/>} />
          <Route path='/signup' element={<SignupForm/>} />
        </Routes>
    
    </div>
  )
}
export default App;