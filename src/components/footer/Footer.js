import React from 'react';
import "./Footer.css";
import "../images/whas.jpg";
import { FiFileText, FiMail} from "react-icons/fi";
import {FaNode} from "react-icons/fa"
import {DiJavascript1, DiPostgresql, DiReact, } from "react-icons/di"
import {SiRedux, SiMysql, SiSequelize, SiCsswizardry } from "react-icons/si"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
            <h1>Santiago Martinez</h1>
            <p>Argentina - San Juan</p>
            </div>
            <div className="footer-contact">
                <h3>Contactame</h3>
                <br></br>
                <p>Y pongamonos manos a la obra</p>
                <br></br>
                <a href="https://drive.google.com/file/d/1-9nnK0LzwiklAnWd_cN2AIstI_V2d5OW/view"> pueder ver mi CV   ,   
                        < FiFileText />
                  </a>
                <br></br>
                <br></br>
                <a href="mailto:santiagovalentino3@gmail.com">Pulsa <FiMail /> para escribirme por correo
                        
                </a>
            </div>
            <div className="footer-sns">
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/santiago-martinez-full-stack-dev" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/SantiagoMartinez12" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github github"></i>
                    </a>
                  
                </div>
            </div>
            <div className="tecn">
            <DiJavascript1 />
            <DiReact />
            <SiRedux />
            <SiCsswizardry/>
            <FaNode />
            <SiMysql />
            <DiPostgresql />
            <SiSequelize/>
            </div>
        </footer>
    )
}

export default Footer
