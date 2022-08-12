import { Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { CenterDiv, ForgotText, FormDiv, MainDiv, MuiButton, MuiEyeOn, PasswordInp, Text, Title, UsernameInp } from './style'
import Data from '../../data/auth'
import {useNavigate} from 'react-router-dom'


const Login = () => {

  //useState
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const navigation = useNavigate()


  function Check() {
    if (Data.username === Username && Data.password === Password) {
      localStorage.setItem('user' , Username)
      localStorage.setItem('pass' , Password)
      navigation('/home')
    }else{
      alert('xato') 
      setUsername('')
      setPassword('')
    }
  }

 


  return (
    <MainDiv>
      <CenterDiv>
        <Title>Asalomu Alekum!</Title>
        <FormDiv>
          <Text>Hush kelibsiz</Text>
          <UsernameInp value={Username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' type='text' />
          <PasswordInp value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password'/>
          <MuiButton onClick={Check} variant='contained'>Sign in</MuiButton>
          <ForgotText>Forgot password?</ForgotText>
        </FormDiv>
      </CenterDiv>
    </MainDiv>
  )
}

export default Login