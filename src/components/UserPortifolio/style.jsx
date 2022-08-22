import styled from "styled-components";

//import Mui
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


//Bgcimg
import BgcImg from '../../images/Team.webp'
import { Button, TextField } from "@mui/material";

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;
    background-color: #a4c3b2;


    @media (max-width:913px) {
        height: 1340px;
    }
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

export const LogoIcon = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
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

    &:hover ${LogoIcon}{
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
    display: flex;

    @media (max-width:913px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export const UserInfoDiv = styled.div`
    width: 450px;
    height: 100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width:913px) {
        height: 600px;
    }
`

export const CenterForm = styled.div`
    width: 380px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 8px #676767;
    border-radius: 10px;
`

export const UserImg = styled.img`
    width: 90%;
    height: 200px;
    object-fit: contain;
    border-bottom: 1px solid gray;
`

export const UserName = styled.h1`
    width: 90%;
    height: auto;
    color: #22335a;
    border-bottom: 1px solid gray;
`

export const Direction = styled.h2`
    width: 90%;
    height: auto;
    color: #22335a;
    border-bottom: 1px solid gray;
`

export const Information = styled.p`
    width: 90%;
    height: auto;
`

export const MuiButton = styled(Button)`
    width: 150px !important;
    height: auto !important;
    
`

export const UserAddPortifolioDiv = styled.div`
    width: calc(100% - 450px);
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width:913px) {
        height: 700px;
        width: auto;
    }
`

export const MuiAddButton = styled(Button)`
    width: 90% !important;
    height: auto !important;
`

export const Conteyner = styled.div`
    width: 90%;
    height: 570px;
    box-shadow: 0px 0px 8px #909090;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    overflow-y: scroll;
    padding: 15px 40px 0px 40px;

    &::-webkit-scrollbar{
        width: 5px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #00000063;
        border-radius: 10px;
    }


    @media (max-width:911) {
        width: auto;
    } */

`

export const Div = styled.div`
   width: 100%;
    height: 100%;
    box-shadow: 0px 0px 8px #909090;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    overflow-y: scroll;
    padding: 15px 40px 0px 40px;

    &::-webkit-scrollbar{
        width: 5px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #00000063;
        border-radius: 10px;
    }


    @media (max-width:911) {
        width: auto;
    } 
`

// Card

export const CardDiv = styled.div`
    width: 300px;
    height: 400px;
    background-color: #2D325A;
    border: 1px solid gray;
    box-shadow: 0px 0px 8px #808080;
    margin: 0px 0px 30px 0px;
    /* display: none; */
`

export const InfoMorDiv = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`


export const CartImg = styled.img`
    width: 100%;
    height: 200px;
`

export const InfoDiv = styled.div`
    width: 100%;
    height: calc(100%  - 220px);
`

export const Name = styled.h3`
    width: 100%;
    height: 30px;
    color: blue;
    padding: 0px 0px 0px 10px; 
`

export const LastName = styled.h5`
    width: 100%;
    height: 20px;
    color: gray;
    padding: 0px 0px 0px 10px; 
    border-bottom: 1px solid gray;
`

export const Type = styled.p`
    width: 100%;
    height: auto;
    padding: 10px 0px 0px 10px; 
    color: #a9a9a9;
`

/// Form Add to user portifolio

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
    position: relative;
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

export const EditimgMy = styled.div`
    width:100%;
    height: 250px;
    border:none;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`

export const ImgDiv = styled.div`
    width: 100%;
    height: 100%;
`

export const ThisImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    top: 275px;
    cursor: pointer;
    font-weight: 450;
`

export const MuiIconCloud = styled(CloudUploadIcon)`
    color: white !important;
    font-size: 20px !important;
`



