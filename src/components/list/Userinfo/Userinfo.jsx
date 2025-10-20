import React from "react";
import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="User avatar" />
        <h2>Aribi Rahma</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="More options" />
        <img src="./video.png" alt="Start video call" />
        <img src="./edit.png" alt="Edit profile" />
      </div>
    </div>
  );
};

export default UserInfo;
