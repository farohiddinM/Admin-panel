import React, { useState } from 'react'
import { Barr, BarrInDiv, BlurText, ButtonDiv, CardDiv, CartImg, CenterForm, ChangeImg, Conteyner, Direction, Div, EditimgMy, FormDiv, IconsDiv, InfoDiv, InfoMorDiv, Information, Label, LastName, LinkInp, LogoIcon, MainDiv, MuiAddButton, MuiButton, MuiIconCloud, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, Name, NameInp, ParagrafInp, PostBtn, TableDiv, Text, ThisImg, Type, UserAddPortifolioDiv, UserImg, UserInfoDiv, UserName } from './style'
import { useNavigate } from 'react-router-dom'
import MenuInfo from './MenuInfo/MenuInfo'
import MyModal from './Modal/Modal'

// Img
import UserImage from '../../images/Man4.jpg'
import Port1 from '../../images/Port3.jpg'
import ImgCloud from '../../images/Cloud.png'
import  GeekZone  from "../../images/GeekZone.jpg";


//import Mui
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';


const UserPortifolio = () => {
  const navigation = useNavigate()
  
  const [work, setWork] = useState(false)

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
    if(work){
      setWork(false)

    }else{
      setWork(true)
    }

  }


  return (
    <MainDiv>
      <MyModal />
        <Barr>
          <BarrInDiv>
            <IconsDiv> <LogoIcon src={GeekZone} onClick={Admin} /> </IconsDiv>
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
          <Div style={{display: `${work? "none" : ""}`}}>
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

<FormDiv style={{display: `${work?"":'none'}`}}>

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