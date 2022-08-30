// import { Password } from '@mui/icons-material'
import React, { useEffect, useState } from "react";
import {
  CenterDiv,
  ForgotText,
  FormDiv,
  MainDiv,
  MuiButton,
  PasswordInp,
  Text,
  Title,
  UsernameInp,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../redux/loginSlice/loginSlice";
const Login = () => {
  //useState
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { eneter, loading } = useSelector((state) => state.loginActions);
  async function handleSubmit(e) {
    e.preventDefault();
    let datas = {
      username: Username,
      password: Password,
    };
    if (Username.length > 0 && Password.length > 0) {
      dispatch(fetchLogin(datas));
      setUsername("");
      setPassword("");
    } else {
      alert("username yoki parolni kiriting");
    }
  }

  if (loading === false) {
    if (eneter === true) {
      navigation("/home");
    } else {
      alert("siz username yoki parolni noto'g'ri kiritigiz ");
    }
  }

  return (
    <MainDiv>
      <CenterDiv>
        <Title>Peace be upon you</Title>
        <FormDiv onSubmit={handleSubmit}>
          <Text>Welcome !</Text>
          <UsernameInp
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
          />
          <PasswordInp
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <MuiButton type="submit" variant="contained">
            Sign in
          </MuiButton>
          <ForgotText>Forgot password?</ForgotText>
        </FormDiv>
      </CenterDiv>
    </MainDiv>
  );
};

export default Login;
