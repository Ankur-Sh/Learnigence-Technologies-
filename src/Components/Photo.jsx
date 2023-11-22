import React from "react";
import "./Photo.css";
import p1 from "../assets/img/logo192.png";
function Photo() {
    return (
        <div className="photo">
            <div className="pic1">
                <img className="picture" src={p1} alt="a" />
            </div>
            <div className="pic1">
                <img className="picture" src={p1} alt="a" />
            </div>
            <div className="photo_icons">
                <div className="row1">
                    <div className="pair">
                        <div className="photo_icon">icon</div>
                        <div className="para">para</div>
                    </div>
                    <div className="pair">
                        <div className="photo_icon">icon</div>
                        <div className="para">para</div>
                    </div>
                    <div className="pair">
                        <div className="photo_icon">icon</div>
                        <div className="para">para</div>
                    </div>
                </div>
                <div className="row2">
                    <div className="pair">
                        <div className="photo_icon">icon</div>
                        <div className="para">para</div>
                    </div>
                    <div className="pair">
                        <div className="photo_icon">icon</div>
                        <div className="para">para</div>
                    </div>
                    <div className="pair">
                        <div className="photo_icon">icon</div>
                        <div className="para">para</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Photo;
