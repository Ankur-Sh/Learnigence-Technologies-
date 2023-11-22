import React from "react";
import "./Navbar.css";
import profile from "../assets/img/logo192.png";

function Navbar() {
    return (
        <div className="navbar">
            <div className="space logo">
                <img className="logo_pic" src={profile} alt="logo" />
            </div>
            <div className="space icon">icon</div>
            <div className="space icons">
                <div className="space icon">icon</div>
                <div className="space icon">icon</div>
                <div className="space icon">icon</div>
                <div className="space icon">icon</div>
                <div className="space icon">icon</div>
                <div className="space icon">icon</div>
            </div>
            <div className="space profile">
                <img className="profile_pic" src={profile} alt="profile" />
            </div>
        </div>
    );
}

export default Navbar;
