import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  ExpandMore,
  // Close,
  // closeIcon,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@mui/icons-material";
import "react-responsive-modal/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import { Modal } from "react-responsive-modal";
import { Avatar, Button, Input } from "@mui/material";
import "./css/QuoraHeader.css";
import axios from "axios"

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  const [inputUrl,setInputUrl] = useState ("") 
  const [question, setQuestion]= useState("")
  const handleSubmit= async() =>{
    if(question !== ""){

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      const body={
        questionName: question,
        questionUrl : inputUrl
      }
      await axios.post('/api/questions', body,config).then((res)=>{
        console.log(res.data)
      }).catch((e)=>{
        console.log(e)
      })
    }
  }

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />{" "}
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />{" "}
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />{" "}
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />{" "}
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />{" "}
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type={"text"} placeholder="Search quora"></input>
        </div>
        <div className="qHeader__Rem">
          <Avatar />

          <Button onClick={() => setIsModalOpen(true)}>Add a question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share link</h5>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
              className="modal__info"
            >
              <Avatar className="avatar" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(98, 98, 98)",
                  padding: "5px",
                  marginLeft: "10px",
                  backgroundColor: "rgb(230, 230, 230)",
                  borderRadius: "33px",
                  cursor: "pointer",
                }}
                className="modal__scop"
              >
                <PeopleAltOutlined />
                <p
                  style={{
                    marginLeft: "10px",
                    fontSize: "small",
                    color: "gray",
                    margin: "6px 0px 6px 10px"
                  }}
                >
                  Public
                </p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <Input
                value={question}
                onChange={(e)=> setQuestion(e.target.value)}
                type="text"
                placeholder="Start a question with 'what','how', etc  "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Input
                  type="text"
                  value={inputUrl}
                  onChange = {(e)=> setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="optional: include a link of given context"
                />
                {inputUrl !== "" && <img style={{
                  height: "40vh",
                  objectFit: "contain",
                }} src={inputUrl} alt="displayimage" />}
              </div>
            </div>
            <div className="modal__button">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                cancel
              </button>
              <button onClick={handleSubmit}  className="add" type="submit">
                Add a question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
