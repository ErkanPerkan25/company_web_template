import {useState} from "react"

function VideoShow(){
    return(
        <div className="">
            <h1></h1>
            <div className="relative">
                <video  className="w-full h-150 brightness-50 object-cover object-center" autoPlay muted>
                    <source className="" src="assets/fishing_reel.mp4" type="video/mp4" />
                    <p>
                        Your broswer does not support the HTML video. Here is a link
                        <a href="assets/fishing_reel.mp4" download="fishing_reel.mp4">link to the video</a> instead.
                    </p>
                </video>
                <div className="absolute top-40 right-100 size-64 text-white">
                        <h1 className="text-7xl font-bold">
                            FISH
                            <br />
                            EAT
                            <br />
                            SLEEP
                            <br />
                            REPEAT
                        </h1>
                </div>
            </div>
        </div>
    )
}

export default VideoShow;
