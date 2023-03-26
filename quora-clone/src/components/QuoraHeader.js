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

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

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
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="optional: include a link of given context"
                />
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                cancel
              </button>
              <button className="add" type="submit">
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
