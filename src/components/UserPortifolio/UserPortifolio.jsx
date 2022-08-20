import React, { useState } from 'react'
import { Barr, BarrInDiv, BlurText, ButtonDiv, CardDiv, CartImg, CenterForm, ChangeImg, Conteyner, Direction, Div, EditimgMy, FormDiv, IconsDiv, InfoDiv, InfoMorDiv, Information, Label, LastName, LinkInp, MainDiv, MuiAddButton, MuiButton, MuiIconCloud, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, Name, NameInp, ParagrafInp, PostBtn, TableDiv, Text, ThisImg, Type, UserAddPortifolioDiv, UserImg, UserInfoDiv, UserName } from './style'
import { useNavigate } from 'react-router-dom'

//import img
import UserImage from '../../images/Man4.jpg'
import Port1 from '../../images/Port3.jpg'
import MenuInfo from '../User/MenuInfo/Menu'
import ImgCloud from '../../images/Cloud.png'


//import Mui
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const UserPortifolio = () => {
  const navigation = useNavigate()


  //useState
  const [True, setTrue] = useState(false)

  const [Img, SettingImg] = useState('');
  const [ImgtoBackend, setImgtoBackend] = useState(null)

  const SEtImg = (e) => {
    const rasm = e.target.files[0]
    SettingImg(URL.createObjectURL(rasm))
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


  //Button Add to project function
  function Change() {
    
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
          <UserInfoDiv>
            <CenterForm>
              <UserImg  src={UserImage} alt='Img' />
              <UserName>Jack</UserName>
              <Direction>Front-End</Direction>
              <Information>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse cum consequuntur rem minus quae! Iure esse sequi quibusdam aliquid molestias numquam at et itaque quis.</Information>
            </CenterForm>
            <MuiButton variant='contained' endIcon={<ArrowForwardSharpIcon />} >My works</MuiButton>
          </UserInfoDiv>

          <UserAddPortifolioDiv>
            <MuiAddButton variant='contained' onClick={Change} >Add to Project</MuiAddButton>
            <Conteyner>
          <Div>
            <CardDiv>
              <InfoMorDiv>
                <MenuInfo />
              </InfoMorDiv>
              <CartImg src={Port1} alt='img' />
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
                <Name>for the portfolio</Name>
                <LastName>#html #css #javaScript #react</LastName>
                <Type>Lorem ipsum Ab modi voluptate ipsam voluptatem id quod a obcaecati quia? Id rerum vitae sed aut numquam est officia</Type>
              </InfoDiv>
            </CardDiv>
          </Div>
{/*========= Add to project ================================== */}

<FormDiv>

<EditimgMy>
  <label Htmlfor="img_upload" className="img__drop">
    <ThisImg src={Img.length > 0 ? Img : ImgCloud } alt="" />
  <input
    type="file"
    onChange={(e) => SEtImg(e)}
    name=""
    hidden
    id="img_upload" />
  <ChangeImg>Uload <MuiIconCloud /> </ChangeImg>
  </label>
</EditimgMy>

<NameInp variant='standard' label="Project Name" type='name' />
<LinkInp variant='standard' label='Project Link' type='text' />
<ParagrafInp placeholder='Paragraf Comment' />
<PostBtn variant='contained'>Add to Project</PostBtn>

</FormDiv>

            </Conteyner>
          </UserAddPortifolioDiv>
        </TableDiv>

    </MainDiv>
  )
}

export default UserPortifolio