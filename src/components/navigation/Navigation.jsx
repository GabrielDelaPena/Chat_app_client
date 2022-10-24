import React from "react";
import "./navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <p className="nav-logo">Logo</p>
      <div className="nav-info">
        <p className="nav-signout">Sign Out</p>
        <img
          src="https://image.winudf.com/v2/image/Y29tLmJhbGVmb290Lk1vbmtleURMdWZmeVdhbGxwYXBlcl9zY3JlZW5fMF8xNTI0NTE5MTEwXzAyOA/screen-0.jpg?fakeurl=1&type=.webp"
          alt=""
          className="nav-profile-image"
        />
      </div>
    </nav>
  );
}

export default Navigation;
