import * as React from "react";
import Modal from "@mui/material/Modal";
import {CencleBtn,ChangeImg,CommandDiv,DelImg,DelName,EditimgMy,LinkInp,ModalDiv,MuiIconCloud,NameInp,ParagrafInp,SaaveBtn,ThisImg,} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { teamCloseModal } from "../../../redux/teamEditModalSlice/teamEditModalSlice";
import { useState } from "react";
import { teamDeleteClose } from "../../../redux/teamDeleteModalSlice/teamDeleteModalSlice";

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
 
  const teamOpen = useSelector((state) => state.teamEditeActions.modalOpen);
  const teamDelete = useSelector((state) => state.teamDeleteActions.teamDeleteOpenModal);

  //UseState
  const [Img, SettingImg] = useState("");
  const [ImgtoBackend, setImgtoBackend] = useState(null);
  const [project_name, setProject_name] = useState('')
  const [project_link, setproject_link] = useState('')
  const [comment, setComment] = useState('')
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
        open={teamOpen}
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

          <NameInp label="Project Name" variant="standard" value={project_name}  onChange={e => setProject_name(e.target.value)} />
          <LinkInp label="Project Link" variant="standard" value={project_link}  onChange={e => setproject_link(e.target.value)} />
          <ParagrafInp placeholder='Paragraf Comment' value={comment}  onChange={e => setComment(e.target.value)} />

          <CommandDiv>
            <CencleBtn variant="contained" color="error" onClick={() => dispatch(teamCloseModal())} >
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
          open={teamDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalDiv>
            <DelImg src={ImgCloud} />
            <DelName>Ikrom</DelName>
            <CommandDiv>
              <CencleBtn variant="contained" color="success" onClick={() => dispatch(teamDeleteClose())} > Cencle </CencleBtn>
              <SaaveBtn variant="contained" color="error"> Delete </SaaveBtn>
            </CommandDiv>
          </ModalDiv>
        </Modal>
    </>
  );
}
export default MyModal;
