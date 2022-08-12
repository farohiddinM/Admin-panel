import React from 'react'
import { Barr, BarrInDiv, ButtonDiv, CardDiv, CartImg, CenterDiv, IconsDiv, InfoDiv, InfoMorDiv, Label, LastName, MainDiv, MuiLogoIcon, MuiMore, MuiTeamIcon, MuiUserIcon, Name, TableDiv, Text, Type } from './style'
import MenuInfo from '../User/MenuInfo/Menu'

//import img
import Img from '../../images/bgc.jpg'

const User = () => {
  return (
    <MainDiv>
        <Barr>
          <BarrInDiv>
            <IconsDiv> <MuiLogoIcon /> </IconsDiv>
            <IconsDiv> <MuiUserIcon /> <Label>User Add</Label> </IconsDiv>
            <IconsDiv> <MuiTeamIcon /> <Label>Team group</Label> </IconsDiv>
          </BarrInDiv>
        </Barr>

        <TableDiv>
          <CenterDiv>
            
            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
              <InfoDiv>
                <Name>Jack</Name>
                <LastName>Jhonov</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia laudantium quibusdam neque nemo.</Type>
              </InfoDiv>
            </CardDiv>

            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Img} alt='img' />
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