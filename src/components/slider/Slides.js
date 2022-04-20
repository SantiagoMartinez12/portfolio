import React from 'react';
import "./Slider.css";
import images from '../images/videogames.jpg';
import asset from '../asset/logoMV.png';


const slidesInfo = [
    {
        title: "Proyecto N1 Api VideoGames",
        img: images,
        link:"https://www.youtube.com/watch?v=80M5tdc7W5s",
        
    },

    {
        title:"Mozo-Virtual",
        img:asset,
        link:"https://www.mozo-virtual.xyz/",
    },


]

const slides = slidesInfo.map(slide => (
    <div>
        <a href={slide.link}>
        <img src={slide.img}   width="250px" height="200px"/>
             </a>
        
    </div>
))

export default slides;