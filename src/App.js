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
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () =>{

  const [user,setLoginUser]=useState({})
  return(
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <div>
        <Routes>
          <Route exact path="/" element={
            user && user._id ?
            <HomePage/>:
            <LoginForm setLoginUser={setLoginUser}/>
            }/> 
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/card" element={<Qard/>}/>
          <Route path="/todoApp" element={<Todo/>}/>
          <Route path="/setStateClass" element={<SetStateClass/>}/>
          <Route path='/setStateFunction' element={<SetStateFunction/>}/>
          <Route path='/setStateOnClick' element={<SetStateClick/>}/>
          <Route path='/stateDataTraverse' element={<StateDataTraverse/>}/>
          <Route path='/hitApi' element={<HitApi/>}/>
          <Route path='/signin' element={
            <LoginForm setLoginUser={setLoginUser}/>
            } />
          <Route path='/signup' element={<SignupForm/>} />
        </Routes>
    
      </div>
    </GoogleOAuthProvider>
  )
}
export default App;