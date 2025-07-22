import React from "react";
import "./Header.css";
import logo from "./icon.png"; // Assuming you have a logo image in the same directory
import profile from "./profile.png"; // Assuming you have a profile image in the same directory
const Header =  () => {
    return (
        <header>
            <div className="logo">
               <img src={logo} alt="logo" width="100" height="100" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="user-icon">
               <img src = {profile} />
            </div>
        </header> 
    )
}


export default Header;