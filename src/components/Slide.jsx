import {useState} from "react"

function Slide({url, caption}){
    return(
        <div>
            <img src={url} alt={caption}/>
        </div>
    );
}

export default Slide;
