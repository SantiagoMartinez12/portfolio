import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides';
import "./Slider.css";

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos</h2>
                </div> 
                <Carousel
                    arrows
                    
                    itemPerPage={1}
                    animationSpeed={200}
                    
                    
                    itemWidth={250}
                    itemHeight={200}
                    slides={Slides}
                />
        </div>
    )
}

export default Slider
