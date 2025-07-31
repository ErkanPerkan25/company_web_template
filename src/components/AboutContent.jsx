import { useState } from "react";
import { Link } from "react-router-dom";

function AboutContent(){
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold m-5">About Fishing Nerds</h1>

            <p className="text-lg">
            <i>We love fishing, so we decided to create our own fishing gear. And now share it with the rest of 
            the fishing community.</i>
            </p>
            <Link to={"/contact"} className="m-5">
                <p className="rounded-md text-white bg-linear-to-r from-cyan-500 to-sky-600 p-1">Contact our team</p>
            </Link>
            
            <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="w-150 m-3 text-center">
                    <h1 className="font-bold text-3xl mt-5">The start</h1>
                    <p className="text-sm md:text-lg lg:text-xl m-2">
                        It all started with my old man teaching me how to fish. We would go out fishing every weekend we could.
                        From there I grew up fishing all the time, and when I got older I a group friends who believed in my
                        idea to create our own fishing gear. So, we started working in my garage and now we have created our own
                        fishing gear.
                    </p>
                </div>

                <div className="w-150 m-3">
                    <img src="/assets/boss_fishing.jpg"
                        className="w-130 rounded-4xl"
                        alt="Picture of a Fish"
                    />
                </div>
                    <img src="/assets/start_of_fishing_gear.jpg"
                        className="w-130 rounded-4xl"
                        alt="Picture of a Fish"
                    />
                <div>

                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutContent;
