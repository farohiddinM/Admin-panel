import React from 'react'
import { Barr, BarrInDiv, CenterDIV, FormDiv, IconsDiv, ImgInp, Label, LinkInp, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, NameInp, ParagrafInp, PostBtn, TableDiv,} from './style'
import { useNavigate } from 'react-router-dom'


const Posting = () => {

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
          <CenterDIV>
            <FormDiv>
              <ImgInp type='file' />
              <NameInp variant='standard' label="Project Name" type='name' />
              <LinkInp variant='standard' label='Project Link' type='text' />
              <ParagrafInp placeholder='Paragraf Comment' />
              <PostBtn variant='contained'>Post</PostBtn>
            </FormDiv>
          </CenterDIV>
        </TableDiv>
    </MainDiv>
  )
}

export default Posting