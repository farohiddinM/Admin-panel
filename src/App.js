import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import './App.css';

//components 
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import User from './components/User/User'

function App() {
  const [render, setrender] = useState(false)

  const navigation = useNavigate()
  const Token = !!localStorage.getItem('user') 

  useEffect(() => {
    Token ? navigation('/home') : navigation('/')
  }, [render])
  
  console.log(Token);

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home Render={render} Setrender={setrender} />} />
          <Route path='/user' element={<User />} />
        </Routes>
    </div>
  );
}

export default App;
