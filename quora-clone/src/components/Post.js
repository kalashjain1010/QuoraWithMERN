import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./css/Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>user name</h4>
        <small>time</small>
      </div>
      <div className="post__body">
        <p>this is test question</p>
        <button className="post__btnAnswer">answer</button>
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
      <p>1 Answer</p>
      <div className="post__answer">
        <div className="post-answer-container">
          <div className="post-answered">
            <Avatar/>
              <div className="post-info">
                <p>

                  username 
                </p>
                <span>timestap</span>
              </div>
          </div>
          <div className="post-answer">
            this is test answer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
