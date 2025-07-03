import {useState} from "react";
import Slide from "./Slide.jsx";
import pictures from "../data/Slideshow_pics.js";

function Slideshow(){

    return(
        <div>
            <div className="">
                {pictures.map(img =>(
                    <Slide 
                        url={img.url}
                        caption={img.caption}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
