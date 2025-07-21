import {useState} from "react"
import {Link} from "react-router-dom"

function Navbar(){

    return(
        <div className="relative sticky h-25 flex flex-row items-center bg-stone-500 text-white">
            <img className="w-20 m-6" src="/assets/vecteezy_big-bass-fish.png" alt="Vecteezy.com" />
            <h1 className="text-3xl font-bold text-center"><Link to="/">Fishing Nerds</Link></h1>
            <ul className="ml-100 flex flex-row justify-center text-center">
                <li className="p-6"><Link to="/products">Products</Link></li>
                <li className="p-6"><Link>About Us</Link></li>
                <li className="p-6"><Link>Our Mission</Link></li>
                <li className="p-6"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="ml-80">
                <a href="#" className="fa fa-search w-12 h-12 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                <a href="#" className="fa fa-user w-12 h-12 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                <a href="#" className="fa fa-shopping-cart w-12 h-12 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
            </div>
        </div>
    )
};

export default Navbar;
