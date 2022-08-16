import styled from "styled-components";

//import Mui
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import TextField from '@mui/material/TextField';

//Bgcimg
import BgcImg from '../../images/Team.webp'
import { Button } from "@mui/material";

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;
    background-color: #a4c3b2;
`

export const BarrInDiv = styled.div`
    width: auto;
    height: 200px;
    /* border: 1px solid white; */
    border-radius: 0px 20px 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const IconsDiv = styled.div`
    width: 100%;
    height: 50px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 5px red;
    

    :nth-child(3){
        border-radius: 0px 0px 0px 0px;
    }


`

export const Label = styled.label`
    display: none;
    color: white;
`

export const MuiLogoIcon = styled(LogoDevIcon)`
    color: gray !important;
    font-size: 35px !important;
`

export const MuiUserIcon = styled(PersonAddAltIcon)`
    font-size: 35px !important;
    color: gray !important;
`

export const MuiTeamIcon = styled(GroupsIcon)`
    font-size: 35px !important;
    color: gray !important;
`


export const Barr = styled.div`
    width: 70px;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
    background-color: #082c46;
    transition: 1s;


    &:hover{
        width: 250px;
        transition: 1s;
    }

    &:hover ${IconsDiv}{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;

        :nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    }

    &:hover ${MuiLogoIcon}{
        font-size: 50px !important;
    }
    

    &:hover ${Label}{
        display: block;
        padding: 10px;
        color: gray;

        &:hover{
            color: white;
            cursor: pointer;
        }
    }

`



export const TableDiv = styled.div`
    width: calc(100% - 70px);
    height: 100%;
    background-color: #a4c3b2;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CenterDIV = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormDiv = styled.div`
    width: 400px;
    height: 100%;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px #606060;
    border-radius: 10px;
`

export const ImgInp = styled.input`
    width:100%;
    height: 250px;
    border:none;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`


export const NameInp = styled(TextField)`
    width: 90% !important ;
    height: auto !important;
    /* padding: 10px !important; */
`

export const LinkInp = styled(TextField)`
    width: 90% !important;
    height: auto !important;
    /* padding: 10px !important; */
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

export const PostBtn = styled(Button)`
    width: 85% !important;
`



