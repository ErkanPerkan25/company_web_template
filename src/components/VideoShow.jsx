import {useState} from "react"

function VideoShow(){
    return(
        <div className="brightness-50 z-10">
            <h1></h1>
            <video  className="w-full h-full object-cover object-center" autoPlay loop muted>
                <source className="" src="assets/fishing_reel.mp4" type="video/mp4" />
                <p>
                    Your broswer does not support the HTML video. Here is a link
                    <a href="assets/fishing_reel.mp4" download="fishing_reel.mp4">link to the video</a> instead.
                </p>
            </video>
            <div className="relative z-20 w-full text-left">
                <div className="">
                    <h1 className="">
                        FISH
                        <br />
                        EAT
                        <br />
                        SLEEP
                        <br />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default VideoShow;
