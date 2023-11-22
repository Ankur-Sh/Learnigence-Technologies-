import React from "react";
import "./Video.css";

function Video() {
    return (
        <div className="video">
            <iframe
                width="1100"
                height="650"
                src="https://www.youtube.com/embed/EJxeMbDTkVI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default Video;
