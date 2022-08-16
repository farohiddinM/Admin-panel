import React, { useState } from 'react'
import { Barr, BarrInDiv, CenterDIV, FormDiv, IconsDiv, ImgInp,EditimgMy, Label, LinkInp, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, NameInp, ParagrafInp, PostBtn, TableDiv, ImgDiv, ChangImg, ThisImg, ChangeImg, MuiIconCloud, DefaultImg, ChoosFileDiv, ChoosFileInp,} from './style'
import { useNavigate } from 'react-router-dom'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImgCloud from '../../images/Cloud.png'

const AddUser = () => {
  const [Img, SettingImg] = useState('');
  const [ImgtoBackend, setImgtoBackend] = useState(null)

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
            <IconsDiv> <MuiLogoIcon onClick={Admin} /> </IconsDiv>
            <IconsDiv> <MuiUserIcon onClick={Nav} /> <Label onClick={Nav} >User Add</Label> </IconsDiv>
            <IconsDiv> <MuiTeamIcon onClick={TeamGroup} /> <Label onClick={TeamGroup} >Team group</Label> </IconsDiv>
          </BarrInDiv>
        </Barr>
        <TableDiv>
          <CenterDIV>
            <FormDiv>



            <EditimgMy>
                {/* <ImgDiv>
                <ThisImg src={Img} alt="Img" /> 

                </ImgDiv> */}
                <label for="img_upload" className="img__drop">
                  <ThisImg src={Img.length > 0 ? Img : ImgCloud } alt="" />
                <input
                  type="file"
                  onChange={(e) => SEtImg(e)}
                  name=""
                  hidden
                  id="img_upload"
                />
                <ChangeImg>Uload <MuiIconCloud /> </ChangeImg>
                </label>
          </EditimgMy>
            
              <NameInp variant='standard' label="Name" type='name' />
              <LinkInp variant='standard' label='Last Name' type='text' />
              <ParagrafInp placeholder='Description' />

              <ChoosFileDiv>
                <p for="file">Choose resume file</p>
                <ChoosFileInp type="file" name="file"  />
              </ChoosFileDiv>

              <PostBtn variant='contained'>Add to User</PostBtn>
            </FormDiv>
          </CenterDIV>
        </TableDiv>
    </MainDiv>
  )
}

export default AddUser


{/* <ThisImg src={Img} alt="Img" />  */}