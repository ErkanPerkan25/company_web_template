import {useState} from "react"

function Navbar(){
    return(
        <div className="h-20 bg-stone-500 flex flex-row items-center">
            <h1 className="ml-20 text-3xl text-center">Company Name</h1>
            <ul className="ml-150 flex flex-row justify-center text-center">
                <li className="p-6"><a>Home</a></li>
                <li className="p-6"><a>About Us</a></li>
                <li className="p-6"><a>Our Mission</a></li>
                <li className="p-6"><a>Contact Us</a></li>
            </ul>
        </div>
    )
};

export default Navbar;
