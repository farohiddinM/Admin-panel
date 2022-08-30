// import { Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { CenterDiv, ForgotText, FormDiv, MainDiv, MuiButton,PasswordInp, Text, Title, UsernameInp } from './style'
// import Data from '../../data/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { fetchLogin } from '../../redux/loginSlice/loginSlice'
const url = process.env.REACT_APP_API
// const url = process.env.REACT_APP_REST_API
const Login = () => {

  //useState
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const navigation = useNavigate()
  const dispatch = useDispatch()

 async function handleSubmit (e) {
    e.preventDefault()
    let datas = {
      username: Username,
      password: Password
    }
   
    if (Username.length > 0 && Password.length > 0) {
       dispatch(fetchLogin(datas))
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
        <FormDiv onSubmit={handleSubmit}>
          <Text>Hush kelibsiz</Text>
          <UsernameInp value={Username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' type='text' />
          <PasswordInp value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password'/>
          <MuiButton type='submit' variant='contained'>Sign in</MuiButton>
          <ForgotText>Forgot password?</ForgotText>
        </FormDiv>
      </CenterDiv>
    </MainDiv>
  )
}

export default Login