import {useState} from "react"

function Navbar(){
    return(
        <div className="h-20 bg-stone-500 flex flex-row gap-50 items-center">
            <h1 className="basis-64 text-3xl text-center">Company Name</h1>
            <ul className="basis-225 flex flex-row gap-25 justify-center text-center px-2">
                <a className="my-2"><li>Home</li></a>
                <a className="my-2"><li>About Us</li></a>
                <a className="my-2"><li>More</li></a>
                <a className="my-2"><li>Contact Us</li></a>
            </ul>
        </div>
    )
};

export default Navbar;
