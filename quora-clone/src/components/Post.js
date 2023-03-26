import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./css/Post.css";
import { Modal } from "react-responsive-modal";
import "./css/QuoraHeader.css";
import CloseIcon from "@mui/icons-material/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>user name</h4>
        <small>time</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>this is test question</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            answer
          </button>
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
            <div className="modal__question">
              <h1>this is test ques</h1>
              <p>
                asked by <span className="name">Username</span> on {" "} <span className="name">Time</span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill placeholder="Enter your answer" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "50px",
                width: "100%",
              }}
              className="modal__button"
            >
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                cancel
              </button>
              <button className="add" type="submit">
                Add an answer
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0px",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <div
          style={{
            display: "felx",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container"
        >
          <div className="post-answered">
            <Avatar />
            <div
              style={{
                margin: "0px 10px",
              }}
              className="post-info"
            >
              <p>username</p>
              <span>timestap</span>
            </div>
          </div>
          <div className="post-answer">this is test answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
