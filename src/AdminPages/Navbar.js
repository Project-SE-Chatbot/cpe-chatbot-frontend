import React from "react";
import logout from "../img/logout.png";
import user from "../img/user.png";

const Navbar = (props) => {

  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    window.location.href = "/Login";
  };


  return (
    <div className="admin-navbar-container">
      <h1>CPE CHATBOT</h1>
      <div className="admin-info-container">
        <div className="admin-info-container">
        <img src={user} style={{width: "35px",height: "35px",margin:"10px"}}></img>
        <p>{username}</p>
        </div>
        <button className="admin-button">
            <img src={logout} style={{width: "35px",height: "35px"}}
            onClick={handleLogout}></img>
        </button>
      </div>
    </div>
  );
};

export default Navbar;