import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Barr, BarrInDiv, BlurText, ButtonDiv, IconsDiv, Label, LogoIcon, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, TableDiv, Text } from './style'
import { useNavigate } from 'react-router-dom'

// Img import
import  GeekZone  from "../../images/GeekZone.jpg";

const Home = ({Render,Setrender}) => {

  const navigation = useNavigate()

  function Back() {
    localStorage.removeItem('user')
    // Setrender(!Render)
    navigation('/')
  }

  const Nav = ()=> {
    navigation('/user')
  }

  const Admin = ()=> {
    navigation('/home')
  }

  const TeamGroup = ()=> {
    navigation('/team')
  }

  return (
    <MainDiv>
      
        <Barr>
          <BarrInDiv>
            <IconsDiv> <LogoIcon src={GeekZone} onClick={Admin} /> </IconsDiv>
            <IconsDiv> <MuiUserIcon onClick={Nav} /> <Label onClick={Nav} >User Add</Label> </IconsDiv>
            <IconsDiv> <MuiTeamIcon onClick={TeamGroup} /> <Label onClick={TeamGroup} >Team group</Label> </IconsDiv>
          </BarrInDiv>
        </Barr>

        <TableDiv>
          <ButtonDiv>
            <Button variant='text' onClick={Back} >Log out</Button>
          </ButtonDiv>
          <Text>GeekZone-Team</Text>
          <ButtonDiv></ButtonDiv>
        </TableDiv>

    </MainDiv>
  )
}

export default Home