import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import './App.css';

//components 
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import User from './components/User/User'
import Team from './components/Team/Team'
import Posting from './components/Posting/Posting'
import AddUser from './components/AddUser/AddUser'
import UserPortifolio from './components/UserPortifolio/UserPortifolio'

function App() {
  const [render, setrender] = useState(false)

  const navigation = useNavigate()
  const Token = !!localStorage.getItem('user') 

  // useEffect(() => {
  //   Token ? navigation('/home') : navigation('/')
  // }, [Token , navigation])
  
  // console.log(Token);

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home Render={render} Setrender={setrender} />} />
          <Route path='/user' element={<User />} />
          <Route path='/team' element={<Team />} />
          <Route path='/posting' element={<Posting />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/userportifolio' element={<UserPortifolio />} />
        </Routes>
    </div>
  );
}

export default App;
