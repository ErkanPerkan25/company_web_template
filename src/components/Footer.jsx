import {useState} from "react";

function Footer(){
    return(
        <div className="w-full fixed bottom-0 h-60 bg-stone-500 ">
            <div className="mt-5 flex flex-col md:flex-row ">
                <div className="ml-20">
                    <h1 className="basis-64 text-3xl text-center">Company Name</h1> 
                    <p className="italic text-center mt-4">Slogo</p>
                    <div className="justify-center text-center mt-10">
                        <a href="#" className="fa fa-facebook w-12 h-12 bg-blue-600 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                        <a href="#" className="fa fa-twitter w-12 h-12 bg-sky-400 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                        <a href="#" className="fa fa-instagram w-12 h-12 bg-sky-800 p-4 mx-2 my-2 rounded-full text-white text-center"> </a>
                    </div>
                </div>
                <div className="ml-30">
                    <ul className="">
                        <li><a>About Us</a></li>
                        <li><a>test</a></li>
                        <li><a>test</a></li>
                    </ul>
                </div>
                <div className="ml-30">
                    <ul className="">
                        <li><a>Our Mission</a></li>
                        <li><a>test</a></li>
                        <li><a>test</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
