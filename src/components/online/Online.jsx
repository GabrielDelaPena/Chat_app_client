import React from "react";
import "./online.css";

function Online() {
  return (
    <div className="online">
      <div className="online-right-side">
        <img
          src="https://i.pinimg.com/originals/28/44/af/2844aff3fac240d013ceb830a5de044a.png"
          alt=""
          className="online-profile-pic"
        />
        <span className="online-icon"></span>
      </div>
      <p className="online-username">Hanamichi Sakuragi</p>
    </div>
  );
}

export default Online;
