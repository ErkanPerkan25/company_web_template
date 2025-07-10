import {useState} from "react";

function Footer(){
    return(
        <footer className="px-0 py-8 sm:px-8 lg:px-8 mt-10 bg-stone-500">
            <div className="py-0 px-20">
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="mr-80">
                        <h1 className="font-bold text-3xl text-center">Fishing Nerds</h1> 
                        <p className="italic text-center mt-4">Company Location</p>
                        <div className="justify-center text-center mt-10">
                            <a href="#" className="fa fa-facebook w-12 h-12 bg-blue-600 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                            <a href="#" className="fa fa-twitter w-12 h-12 bg-sky-400 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                            <a href="#" className="fa fa-instagram w-12 h-12 bg-sky-800 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-xl text-center">About</h1>
                        <ul className="text-center">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="ml-30">
                        <h1 className="text-xl text-center">Mission</h1>
                        <ul className="text-center">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="ml-30">
                        <h1 className="text-xl text-center">Resources</h1>
                        <ul className="text-center">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
