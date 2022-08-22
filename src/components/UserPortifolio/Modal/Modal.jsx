import * as React from "react";
import Modal from "@mui/material/Modal";
import {CencleBtn,ChangeImg,CommandDiv,DelImg,DelName,EditimgMy,LinkInp,ModalDiv,MuiIconCloud,NameInp,ParagrafInp,SaaveBtn,ThisImg,} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { userCloseModal } from "../../../redux/userEditeSlice/userEditeSlice";
import { useState } from "react";  //user
import { userDeleteClose } from "../../../redux/userDeleteSlice/userDeleteSLice";
//Img Import
import ImgCloud from "../../../images/Cloud.png";

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

const MyModal = () => {
  const dispatch = useDispatch();
 
  const userOpen = useSelector((state) => state.userEditeActions.modalOpen);
  const userDelete = useSelector((state) => state.userDeleteActions.userDeleteOpenModal);

  //UseState
  const [Img, SettingImg] = useState("");
  const [ImgtoBackend, setImgtoBackend] = useState(null);

  //Choose File Functions
  const SEtImg = (e) => {
    const rasm = e.target.files[0];
    SettingImg(URL.createObjectURL(rasm));
  };

  return (
    <>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
        open={userOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalDiv>
          <EditimgMy>
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

          <NameInp label="Project Name" variant="standard" />
          <LinkInp label="Project Link" variant="standard" />
          <ParagrafInp placeholder='Paragraf Comment' />

          <CommandDiv>
            <CencleBtn variant="contained" color="error" onClick={() => dispatch(userCloseModal())} >
              Cencle
            </CencleBtn>

            <SaaveBtn variant="contained" color="success">
              Save
            </SaaveBtn>
          </CommandDiv>
          
        </ModalDiv>
      </Modal>

{/* =====================  Dell Modal ===================================== */}

      <Modal
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
          open={userDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalDiv>
            <DelImg src={ImgCloud} />
            <DelName>Ikrom</DelName>
            <CommandDiv>
              <CencleBtn variant="contained" color="success" onClick={() => dispatch(userDeleteClose())} > Cencle </CencleBtn>
              <SaaveBtn variant="contained" color="error"> Delete </SaaveBtn>
            </CommandDiv>
          </ModalDiv>
        </Modal>
    </>
  );
}
export default MyModal;
