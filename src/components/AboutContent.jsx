import { useState } from "react";
import { Link } from "react-router-dom";

function AboutContent(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold m-5">About Fishing Nerds</h1>

            <p className="text-lg">
            <i>We love fishing, so we decided to create our own fishing gear. And now share it with the rest of 
            the fishing community.</i>
            </p>
            <Link to={"/contact"}>
                <p className="rounded-md text-white bg-linear-to-r from-cyan-500 to-sky-600 p-1">Contact our team</p>
            </Link>
            
            <div>
                <div>
                    <p>
                        It all started with my old man teaching me how to fish. We would go out every weekend we could
                        to fish 
                    </p>
                </div>

                <div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
