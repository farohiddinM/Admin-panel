import styled from "styled-components";

// Mui
import { Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';

//img
import Bgimg from '../../images/bgc.jpg'

export const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6565b7;
    background-image: url(${Bgimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const CenterDiv = styled.div`
    width: 500px;
    height:400px;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Title = styled.h2`
    width: 100%;
    height: auto;
    /* border: 1px solid black; */
    text-align: center;
    color: white;
    font-weight: 500;
`

export const FormDiv = styled.form`
    width: 100%;
    height: 300px;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px 20px 0px;
`

export const Text = styled.h2`
    width: 100%;
    height: auto;
    /* border: 1px solid black; */
    text-align: center;
    color: white;
    font-size: 25px;
    font-weight: 300;
`

export const UsernameInp = styled.input`
    width: 320px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 18px;
    padding: 10px;
    background-color: rgba(17, 25, 40, 0.46);
    border: 1px solid gray;
    color: white;

    ::placeholder{
        color: #ffffffc5;
    }
`

export const PasswordInp = styled.input`
    width: 320px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 18px;
    padding: 10px;
    background-color: rgba(17, 25, 40, 0.46);
    border: 1px solid gray;
    color: white;


    
    ::placeholder{
        color: #ffffffc5;
    }
`


export const MuiButton = styled(Button)`
    width: 320px !important;
    height: 40px !important;
    border-radius: 18px !important;
`

export const ForgotText = styled.p`
    width: auto;
    height: auto;
    color: white;
    text-align: center;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`



