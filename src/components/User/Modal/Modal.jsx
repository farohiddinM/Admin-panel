import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/editModalSlice/editModalSlice";
import {CencleBtn,ChangeImg,ChooseFileDiv,ChooseFileInp,CommandDiv,EditimgMy,ImgDiv,ImgInp,LinkInp,ModalDiv,MuiButton,MuiIconCloud,MuiModalDiv,NameInp,SaaveBtn,ThisImg,} from "./style";
import MuiOption from "../../AddUser/MuiOption/MuiOption";
import ImgCloud from "../../../images/Cloud.png";
import { useState } from "react";
import { deleteModalClose } from "../../../redux/deleteModalSlice/deleteModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = () => {
  const dispatch = useDispatch();
 
  const open = useSelector((state) => state.editActions.modalOpen);
  const hello = useSelector((state) => state.deleteActions.deleteOpenModal);
  
  const [Img, SettingImg] = useState("");
  const [ImgtoBackend, setImgtoBackend] = useState(null);

  const SEtImg = (e) => {
    const rasm = e.target.files[0];
    SettingImg(URL.createObjectURL(rasm));
  };

  function Myfile() {
    document.getElementById("resumefile").click();
  }

  return (
    <>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalDiv>
          <EditimgMy>
            {/* <ImgDiv>
                <ThisImg src={Img} alt="Img" /> 

                </ImgDiv> */}
            <label htmlFor="img_upload">
              <ThisImg src={Img.length > 0 ? Img : ImgCloud} alt="" />
              <input
                type="file"
                onChange={(e) => SEtImg(e)}
                name=""
                hidden
                id="img_upload"
              />
              <ChangeImg>
                Upload <MuiIconCloud />{" "}
              </ChangeImg>
            </label>
          </EditimgMy>
          <NameInp label="Name" variant="standard" />
          <LinkInp label="Last Name" variant="standard" />
          <MuiOption />
          <ChooseFileDiv>
            <MuiButton variant="contained" onClick={Myfile}>
              Choose resume file
            </MuiButton>
            <ChooseFileInp type="file" id="resumefile" />
          </ChooseFileDiv>
          <CommandDiv>
            <CencleBtn
              variant="contained"
              color="error"
              onClick={() => dispatch(closeModal())}
            >
              Cencle
            </CencleBtn>
            <SaaveBtn variant="contained" color="success">
              Save
            </SaaveBtn>
          </CommandDiv>
        </ModalDiv>
      </Modal>

      <Modal
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
          open={hello}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalDiv>
            <NameInp label="Name" variant="standard" />
            <CommandDiv>
              <CencleBtn variant="contained" color="error" onClick={() => dispatch(deleteModalClose())} > Cencle </CencleBtn>
              <SaaveBtn variant="contained" color="success"> Save </SaaveBtn>
            </CommandDiv>
          </ModalDiv>
        </Modal>
    </>
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////
}

