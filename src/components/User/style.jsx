import styled from "styled-components";

//import Mui
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

//Bgcimg
import BgcImg from '../../images/Team.webp'

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;
    background-color:#a4c3b2 ;
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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
`

export const HeaderBtn = styled(Button)`
    width: 90% !important;
    height: 50px !important;
    /* margin-top: 10px !important ; */
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    /* gap: 15px; */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: gray;
        border-radius: 10px;
    }
`

export const CardDiv = styled.div`
    width: 300px;
    height: 400px;
    background-color: #2D325A;
    border: 1px solid gray;
    box-shadow: 0px 0px 8px #808080;
    margin: 0px 0px 30px 0px;
`

export const InfoMorDiv = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const MuiMore = styled(MoreHorizIcon)`
    color: gray !important;
    cursor: pointer;
`

export const CartImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

export const InfoDiv = styled.div`
    width: 100%;
    height: calc(100%  - 220px);
`

export const Name = styled.h3`
    width: 100%;
    height: auto;
    color: blue;
    padding: 0px 0px 0px 10px; 
`

export const LastName = styled.h3`
    width: 100%;
    height: auto;
    color: blue;
    padding: 0px 0px 0px 10px; 
    border-bottom: 1px solid gray;
`

export const Type = styled.p`
    width: 100%;
    height: auto;
    padding: 0px 0px 0px 10px;
    color:#a9a9a9; 

`




