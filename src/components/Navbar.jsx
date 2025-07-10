import {useState} from "react"
import {Link} from "react-router-dom"

function Navbar(){

    return(
        <div className="relative sticky h-20 flex flex-row items-center bg-stone-500">
            <h1 className="ml-50 text-3xl font-bold text-center"><Link to="/">Fishing Nerds</Link></h1>
            <ul className="ml-120 flex flex-row justify-center text-center">
                <li className="p-6"><Link>Products</Link></li>
                <li className="p-6"><Link>About Us</Link></li>
                <li className="p-6"><Link>Our Mission</Link></li>
                <li className="p-6"><Link>Contact Us</Link></li>
            </ul>
        </div>
    )
};

export default Navbar;
