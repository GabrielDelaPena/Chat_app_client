import React from "react";
import Conversation from "../components/conversations/Conversation";
import Message from "../components/message/Message";
import Online from "../components/online/Online";
import "./messenger.css";

function Messenger() {
  return (
    <div className="messenger">
      <div className="messenger-conversations">
        <div className="conversation-wrapper">
          <Conversation />
        </div>
      </div>

      <div className="messenger-chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <img
              src="https://i.pinimg.com/originals/28/44/af/2844aff3fac240d013ceb830a5de044a.png"
              alt=""
              className="chat-box-profile-pic"
            />
            <p className="chat-bax-username">Hanamichi Sakuragi</p>
          </div>
          <div className="chat-box-middle">
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
          </div>
          <div className="chat-box-bottom">
            <input
              type="text"
              className="chat-box-input"
              placeholder="Send a message..."
            />
          </div>
        </div>
      </div>

      <div className="messenger-online-friends">
        <div className="online-friends-wrapper">
          <Online />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
