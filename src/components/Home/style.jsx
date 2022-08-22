import styled from "styled-components";

//import Mui
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoDevIcon from '@mui/icons-material/LogoDev';

//Bgcimg
import BgcImg from '../../images/Team.webp'

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;
    background-color: #312D25;
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
    background-color: #f2dfd7;
    /* border: 1px solid red; */
    background-image: url(${BgcImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`

export const ButtonDiv = styled.div`
    width: 100%;
    height: 50px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10px 0px 0px;
`

export const Text = styled.h1`
    font-size: 70px;
    color: rgba(255, 255, 255, 0.831);
    padding: 0px 0px 30px 0px;
    
`