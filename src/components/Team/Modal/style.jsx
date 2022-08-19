import styled from "styled-components";

//Mui ipmort
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from "@mui/material";



export const ModalDiv = styled.div`
  width: 400px;
  height: 555px;
  background-color:#a4c3b2;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #606060;
  

`

export const EditimgMy = styled.div`
    width:100%;
    height: 180px;
    border:none;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`


export const ThisImg = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: contain;
    border: 1px solid gray;
`
export const ChangeImg = styled.p`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1976D2;
    border-radius: 6px;
    color: white;
    position: absolute;
    right: 20px;
    top: 190px;
    cursor: pointer;
    font-weight: 450;
`

export const MuiIconCloud = styled(CloudUploadIcon)`
    color: white !important;
    font-size: 20px !important;
`

export const NameInp = styled(TextField)`
    width: 90% !important ;
    height: auto !important;
`

export const LinkInp = styled(TextField)`
    width: 90%  !important;
    height: auto !important;
`

export const ParagrafInp = styled.textarea`
    width: 90%;
    height: 50px;
    max-width: 90%;
    max-height: 100px;
    min-height: 50px;
    min-width: 90%;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 16px;
    color: black;




    &:hover{
        border-bottom: 2px solid black;
    }


    &::placeholder{
        color: #0000009c;
        font-weight: 500;
    }

    &:focus{
        border-bottom: 1px solid blue;
    }
`

export const CommandDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const CencleBtn = styled(Button)`
    width: 40% !important;
    height: auto !important;
`

export const SaaveBtn = styled(Button)`
    width: 40% !important;
    height: auto !important;
`

export const DelImg = styled.img`
    width: 250px;
    height: 250px;
    border:1px solid gray;
    border-radius: 50%;
    object-fit: contain;
`

export const DelName = styled.h2`
    width: 90%;
    height: 40px;
    border-bottom: 1px solid gray;
    text-align: center;
`





