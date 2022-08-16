import React from 'react'
import { Barr, BarrInDiv,CardDiv,CartImg,CenterDiv,HeaderBtn,IconsDiv, InfoDiv, InfoMorDiv, Label, LastName, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, Name, TableDiv, Type, } from './styled'
import { useNavigate } from 'react-router-dom'
import MenuInfo from '../User/MenuInfo/Menu'

//import img
import Port1 from '../../images/Port1.jpg'
import Port2 from '../../images/Port2.jpg'
import Port3 from '../../images/Port3.jpg'
import Port4 from '../../images/Port4.jpg'



const Team = () => {

  const navigation = useNavigate()


  const Nav = ()=> {
    navigation('/user')
  }

  const Admin = ()=> {
    navigation('/home')
  }

  const TeamGroup = ()=> {
    navigation('/team')
  }

  const Posting = ()=> {
    navigation('/posting')
  }

  return (
    <MainDiv>
        <Barr>
          <BarrInDiv>
            <IconsDiv> <MuiLogoIcon onClick={Admin} /> </IconsDiv>
            <IconsDiv> <MuiUserIcon onClick={Nav} /> <Label onClick={Nav} >User Add</Label> </IconsDiv>
            <IconsDiv> <MuiTeamIcon onClick={TeamGroup} /> <Label onClick={TeamGroup} >Team group</Label> </IconsDiv>
          </BarrInDiv>
        </Barr>

        <TableDiv>
          <HeaderBtn variant='contained' onClick={Posting} >Add to Project</HeaderBtn>
          <CenterDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port1} alt='img' />
              <InfoDiv>
                <Name>Game website</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port2} alt='img' />
              <InfoDiv>
                <Name>for the portfolio</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port3} alt='img' />
              <InfoDiv>
                <Name>Website for music</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port4} alt='img' />
              <InfoDiv>
                <Name>Website for chat</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port4} alt='img' />
              <InfoDiv>
                <Name>Website for chat</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port3} alt='img' />
              <InfoDiv>
                <Name>Website for music</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port2} alt='img' />
              <InfoDiv>
                <Name>for the portfolio</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port1} alt='img' />
              <InfoDiv>
                <Name>Game website</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>

          </CenterDiv>
        </TableDiv>
    </MainDiv>
  )
}

export default Team