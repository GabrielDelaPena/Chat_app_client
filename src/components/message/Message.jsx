import React from "react";
import "./message.css";

function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img
          src={
            own
              ? "https://image.winudf.com/v2/image/Y29tLmJhbGVmb290Lk1vbmtleURMdWZmeVdhbGxwYXBlcl9zY3JlZW5fMF8xNTI0NTE5MTEwXzAyOA/screen-0.jpg?fakeurl=1&type=.webp"
              : "https://i.pinimg.com/originals/28/44/af/2844aff3fac240d013ceb830a5de044a.png"
          }
          alt=""
          className="message-profile-pic"
        />
        <p className="message-text">
          Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de
          16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze
          door elkaar husselde
        </p>
      </div>
      <p className="message-time">2 hours ago</p>
    </div>
  );
}

export default Message;
