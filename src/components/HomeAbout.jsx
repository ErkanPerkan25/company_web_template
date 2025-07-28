import {useState} from "react"

function HomeAbout(){
    return(
        <div className="h-125 flex justify-center text-center bg-sky-950 text-white">
            <div className="flex flex-row w-300 p-15 align-center">
                <img className="mr-auto ml-auto" src="assets/vecteezy_big-bass-fish.png" alt="Vecteezy.com" />
                <div className="justify-center ml-40 mt-auto mb-auto">
                    <h1 className="text-4xl m-5">We are Fishing Nerds</h1> 
                    <p>This is about company and how they are and what they do. It can be a mixture of information depending
                        on what the company wants to describe themselves as.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;
