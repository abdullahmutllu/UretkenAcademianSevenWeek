import React, { useState } from "react";
import "./navbar.css";
import profilImage from "./profile.png";
function Navbar() {
  const [userImage, setUserImage] = useState(null);
  const getProfilImage = () => {
    return userImage ? userImage : profilImage;
  };
  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <div className="logoContainer">
            <h1 className="logo">NoteApp</h1>
          </div>
          <div className="menuContainer">
            <ul className="menuList">
              <li className="menu-list-item"></li>
              <li className="menu-list-item"></li>
              <li className="menu-list-item"></li>
            </ul>
          </div>
          <div className="profileContainer">
            <img src={getProfilImage()} alt="" />
            <div className="profile-content">
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
