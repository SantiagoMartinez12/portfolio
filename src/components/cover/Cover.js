import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coding.mp4";

    const Cover = () => {
    return (
        <div className="cover-container">
        <video className="video" src={coverVideo} autoPlay loop muted />
        <h1>Santiago Martinez</h1>
        <p> FullStack Developer</p>
        </div>
    );
    };

export default Cover;

// escribir rafce y tabulador y te crea el componente!!! 
