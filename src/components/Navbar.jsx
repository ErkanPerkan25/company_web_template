import {useState} from "react"
import {Link} from "react-router-dom"

function Navbar(){

    return(
        <div className="relative sticky top-0 z-1 h-25 flex flex-row items-center bg-sky-950 text-white">
            <Link to="/"><img className="w-20 m-6" src="/assets/vecteezy_big-bass-fish.png" alt="Vecteezy.com" /></Link>
            <h1 className="text-3xl font-bold text-center"><Link to="/">Fishing Nerds</Link></h1>
            <ul className="ml-100 flex flex-row justify-center text-center">
                <li className="p-6"><Link to="/products">Products</Link></li>
                <li className="p-6"><Link to="/about">About Us</Link></li>
                <li className="p-6"><Link>Our Mission</Link></li>
                <li className="p-6"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="ml-70 float-left">
                <a href="#" className="fa fa-search w-12 h-12 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                <a href="#" className="fa fa-user w-12 h-12 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                <a href="#" className="fa fa-shopping-cart w-12 h-12 p-4 mx-2 my-2 rounded-full text-white text-center relative">
                    <span className="w-5 h-5 p-0.5 font-bold rounded-full absolute bg-amber-400 top-2">
                        0
                    </span>
                </a>
            </div>
        </div>
    )
};

export default Navbar;
