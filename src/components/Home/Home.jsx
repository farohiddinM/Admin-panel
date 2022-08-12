import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Barr, BarrInDiv, BlurText, ButtonDiv, IconsDiv, Label, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, TableDiv, Text } from './style'
import { useNavigate } from 'react-router-dom'

const Home = ({Render,Setrender}) => {

  const navigation = useNavigate()

  function Back() {
    localStorage.removeItem('user')
    Setrender(!Render)
  }

  const Nav = ()=> {
    navigation('/user')
  }

  return (
    <MainDiv>
        <Barr>
          <BarrInDiv>
            <IconsDiv> <MuiLogoIcon /> </IconsDiv>
            <IconsDiv> <MuiUserIcon onClick={Nav} /> <Label onClick={Nav} >User Add</Label> </IconsDiv>
            <IconsDiv> <MuiTeamIcon /> <Label>Team group</Label> </IconsDiv>
          </BarrInDiv>
        </Barr>
        <TableDiv>
          <ButtonDiv>
            <Button variant='text' onClick={Back} >Log out</Button>
          </ButtonDiv>
          <Text>GeekZon-Team</Text>
          <ButtonDiv></ButtonDiv>
        </TableDiv>
    </MainDiv>
  )
}

export default Home