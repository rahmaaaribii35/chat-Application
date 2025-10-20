import React, { useState } from "react";
import "./chatList.css";

const ChatList = () => {
    const[addMode,setAddMode]=useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="Search icon" />
          <input type="text" placeholder="Search here" />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="Add chat" className="add" onClick={()=>setAddMode((prev) => !prev)} />
      </div>
      
    </div>
  );
};

export default ChatList;
