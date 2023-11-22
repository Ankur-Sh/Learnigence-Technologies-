import React from "react";
import "./Tagbar.css";

function Tagbar() {
    return (
        <div className="tagbar">
            <ul className="list_items">
                <li>
                    <h3>
                        <a href="#home">Classroom</a>
                    </h3>
                </li>
                <li>
                    <h3>
                        <a href="#news">Whiteboard</a>
                    </h3>
                </li>
                <li>
                    <h3>
                        <a class="active" href="#contact">
                            Videos
                        </a>
                    </h3>
                </li>
                <li>
                    <h3>
                        <a href="#about">Slide Show</a>
                    </h3>
                </li>
                <li>
                    <h3>
                        <a href="#about">Documents</a>
                    </h3>
                </li>
                <li>
                    <h3>
                        <a href="#about">Doc.Cam</a>
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Tagbar;
