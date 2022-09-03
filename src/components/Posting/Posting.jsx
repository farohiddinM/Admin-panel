import React, { useState } from 'react'
import { Barr, BarrInDiv, CenterDIV, FormDiv, IconsDiv, ImgInp,EditimgMy, Label, LinkInp, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, NameInp, ParagrafInp, PostBtn, TableDiv, ImgDiv, ChangImg, ThisImg, ChangeImg, MuiIconCloud, DefaultImg, CommandDiv, MuiCencleBtn, MuiAddToUserBtn, LogoIcon,} from './style'
import { useNavigate } from 'react-router-dom'

// Img import
import ImgCloud from '../../images/Cloud.png'
import  GeekZone  from "../../images/GeekZone.jpg";


const Posting = () => {
  const [Img, SettingImg] = useState('');
  const [ImgtoBackend, setImgtoBackend] = useState(null)
  const [project_name, setProject_name] = useState('')
  const [project_link, setProject_link] = useState('')
  const [comment, setComment] = useState('')

  const SEtImg = (e) => {
    const rasm = e.target.files[0]
    SettingImg(URL.createObjectURL(rasm))
  }

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
          <IconsDiv> <LogoIcon src={GeekZone} onClick={Admin} /> </IconsDiv>
          <IconsDiv> <MuiUserIcon onClick={Nav} /> <Label onClick={Nav} >User Add</Label> </IconsDiv>
          <IconsDiv> <MuiTeamIcon onClick={TeamGroup} /> <Label onClick={TeamGroup} >Team group</Label> </IconsDiv>
        </BarrInDiv>
      </Barr>

        <TableDiv>
          <CenterDIV>
            <FormDiv>

              <EditimgMy>
                <label htmlFor="img_upload" className="img__drop">
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
            
              <NameInp variant='standard' label="Project Name" type='name' value={project_name}  onChange={e => setProject_name(e.target.value)} />
              <LinkInp variant='standard' label='Project Link' type='text' value={project_link}   onChange={e => setProject_link(e.target.value)} />
              <ParagrafInp placeholder='Paragraf Comment' value={Comment}  onChange={e => setComment(e.target.value)} />

              <CommandDiv>
                <MuiCencleBtn onClick={TeamGroup} type='submit' variant='contained' color='error'>Cencle</MuiCencleBtn>
                <MuiAddToUserBtn type='submit' variant='contained' color='success'>Add to Project</MuiAddToUserBtn>
              </CommandDiv>
              
            </FormDiv>
          </CenterDIV>
        </TableDiv>
    </MainDiv>
  )
}

export default Posting


{/* <ThisImg src={Img} alt="Img" />  */}