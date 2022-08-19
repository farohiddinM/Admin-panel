import React, { useState } from 'react'
import { Barr, BarrInDiv, CenterDIV, FormDiv, IconsDiv, ImgInp, EditimgMy, Label, LinkInp, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, NameInp, ParagrafInp, PostBtn, TableDiv, ImgDiv, ChangImg, ThisImg, ChangeImg, MuiIconCloud, DefaultImg, ChoosFileDiv, ChoosFileInp, ChooseFileDiv, MuiButton, ChooseFileInp, } from './style'
import { useNavigate } from 'react-router-dom'
// import MuiOption from '../AddUser/MuiOption/MuiOption'
import ImgCloud from '../../images/Cloud.png'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
const AddUser = () => {
  const [Img, SettingImg] = useState('');
  const [ImgtoBackend, setImgtoBackend] = useState(null)
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const SEtImg = (e) => {
    const rasm = e.target.files[0]
    SettingImg(URL.createObjectURL(rasm))
  }

  const navigation = useNavigate()

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const Nav = () => {
    navigation('/user')
  }

  const Admin = () => {
    navigation('/home')
  }

  const TeamGroup = () => {
    navigation('/team')
  }


  function Myfile() {
    document.getElementById("resumefile").click();
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      // first_name: 
    }
    axios.post('http://127.0.0.1:8000/user-create/', data)
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
          <FormDiv onSubmit={handleSubmit}>



            <EditimgMy>
              <label htmlFor='img_upload'>
                <ThisImg src={Img.length > 0 ? Img : ImgCloud} alt="" />
                <input type="file" onChange={(e) => SEtImg(e)} name="" hidden id="img_upload" />
                <ChangeImg>User img <MuiIconCloud /> </ChangeImg>
              </label>
            </EditimgMy>

            <NameInp variant='standard' label="Name" type='name' value={first_name} onChange={e => setFirst_name(e.target.value)} />
            <LinkInp variant='standard' label='Last Name' type='text' value={last_name} onChange={e => setLast_name(e.target.value)} />
            
            <Stack spacing={1} sx={{ width: '90%' }}>
              <Autocomplete
                {...defaultProps}
                id="clear-on-escape"
                clearOnEscape
                renderInput={(params) => (
                  <TextField {...params} label="Skill" variant="standard" />
                )}
              />
            </Stack>

            <ChooseFileDiv>
              <MuiButton variant="contained" onClick={Myfile}>
                Choose resume file
              </MuiButton>
              <ChooseFileInp type="file" id="resumefile" />
            </ChooseFileDiv>

            <PostBtn type='submit' variant='contained'>Add to User</PostBtn>
          </FormDiv>
        </CenterDIV>
      </TableDiv>
    </MainDiv>
  )
}

export default AddUser

const top100Films = [
  { title: 'FrontEnd', id:1 },
  { title: 'BackEnd' , id :2},
];