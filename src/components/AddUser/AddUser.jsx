import React, { useState } from 'react'
import { Barr, BarrInDiv, CenterDIV, FormDiv, IconsDiv, ImgInp, EditimgMy, Label, LinkInp, MainDiv, MuiLogoIcon, MuiTeamIcon, MuiUserIcon, NameInp, ParagrafInp, PostBtn, TableDiv, ImgDiv, ChangImg, ThisImg, ChangeImg, MuiIconCloud, DefaultImg, ChoosFileDiv, ChoosFileInp, ChooseFileDiv, MuiButton, ChooseFileInp, CommandDiv, MuiCencleBtn, MuiAddToUserBtn, LogoIcon, } from './style'
import { useNavigate } from 'react-router-dom'
// import MuiOption from '../AddUser/MuiOption/MuiOption'
import ImgCloud from '../../images/Cloud.png'
import axios from 'axios'
import {MenuItem ,Select ,InputLabel , FormControl} from '@mui/material'
import {useDispatch , useSelector} from 'react-redux'
// Img import
import GeekZone from "../../images/GeekZone.jpg";
import { useEffect } from 'react'
import { fetchAddUserTypeList } from '../../redux/addUserSlice/addUserSlice'


const AddUser = () => {
  const [Img, SettingImg] = useState('');
  // const [ImgtoBackend, setImgtoBackend] = useState(null) 
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
<<<<<<< HEAD
  const [imgFech, setImgFech] = useState('')
  const [resume, setResume] = useState('')
  const [type , setType] = useState('')
=======
  
>>>>>>> 1b7a5580129ab279044bf0bf5d93db08845a928c
  const SEtImg = (e) => {
    const rasm = e.target.files[0]
    setImgFech(rasm)
    SettingImg(URL.createObjectURL(rasm))
  }
  const {typeList} = useSelector(state => state.addUserActions)
  const dispatch  = useDispatch()
  const navigation = useNavigate()


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
    let formData = new FormData()
    formData.append('image', imgFech, imgFech.name)
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('resume', resume, resume.name)
    formData.append('type', parseInt(type))
    let token = JSON.parse(localStorage.getItem('token'))
    axios.post('http://127.0.0.1:8000/user-create/', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token.key} `,
      }
    })
    setFirst_name('')
    setLast_name('')
    setResume('')
    setImgFech('')
  }
 
  useEffect(() => {
    dispatch(fetchAddUserTypeList())
  } , [dispatch])

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

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Age"
                onChange={e =>  setType(e.target.value)}
              >
                {
                  typeList && typeList.map(list => {
                    return(<MenuItem value={list.id}>{list.name}</MenuItem>)
                  }) 
                }
              </Select>
            </FormControl>

            <ChooseFileDiv>
              <MuiButton variant="contained" onClick={Myfile}>
                Choose resume file
              </MuiButton>
              <ChooseFileInp type="file" id="resumefile" onChange={e => setResume(e.target.files[0])} />
            </ChooseFileDiv>

            <CommandDiv>
              <MuiCencleBtn onClick={Nav} type='submit' variant='contained' color='error'>Cencle</MuiCencleBtn>
              <MuiAddToUserBtn type='submit' variant='contained' color='success'>Add to User</MuiAddToUserBtn>
            </CommandDiv>

          </FormDiv>
        </CenterDIV>
      </TableDiv>
    </MainDiv>
  )
}

export default AddUser


