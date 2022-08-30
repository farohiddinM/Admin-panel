import React from 'react'
import { Barr, BarrInDiv, ButtonDiv, CardDiv, CartImg, CenterDiv, HeaderBtn, IconsDiv, InfoDiv, InfoMorDiv, Label, LastName, LogoIcon, MainDiv, MuiLogoIcon, MuiMore, MuiTeamIcon, MuiUserIcon, Name, TableDiv, Text, Type } from './style'
import MenuInfo from '../User/MenuInfo/Menu'
import { useNavigate } from 'react-router-dom'
import { BasicModal , deleteModal } from './Modal/Modal'

//Img Import
import Img from '../../images/bgc.jpg'
import Man1 from '../../images/Man1.jpg'
import Man2 from '../../images/Man2.jpg'
import Man3 from '../../images/Man3.jpg'
import Man4 from '../../images/Man4.jpg'
import Man5 from '../../images/Man5.jpg'
import Man6 from '../../images/Man6.jpg'
import Man7 from '../../images/Man7.jpg'
import Man8 from '../../images/Man8.jpg'
import  GeekZone  from "../../images/GeekZone.jpg";




const User = () => {

  const navigation = useNavigate()

  const Admin = ()=> {
    navigation('/home')
  }

  const TeamGroup = ()=> {
    navigation('/team')
  }


  const AddUser = ()=> {
    navigation('/adduser')
  }

  const UserPortifolio = ()=>{
    navigation('/userPortifolio')
  }
  
  return (
    <MainDiv>
      <BasicModal   />
      <deleteModal   />
        <Barr>
          <BarrInDiv>
            <IconsDiv> <LogoIcon src={GeekZone} onClick={Admin} /> </IconsDiv>
            <IconsDiv> <MuiUserIcon /> <Label>User Add</Label> </IconsDiv>
            <IconsDiv> <MuiTeamIcon  onClick={TeamGroup} /> <Label onClick={TeamGroup} >Team group</Label> </IconsDiv>
          </BarrInDiv>
        </Barr>

        <TableDiv>
        <HeaderBtn onClick={AddUser} variant='contained'>Add to User</HeaderBtn>
    
          <CenterDiv>
            
            <CardDiv onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man1} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv  onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man2} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv  onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man3} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv  onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man4} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv  onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man5} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv  onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man6} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv  onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man7} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv  onClick={UserPortifolio}>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Man8} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

          </CenterDiv>
        </TableDiv>

    </MainDiv>
  )
}

export default User