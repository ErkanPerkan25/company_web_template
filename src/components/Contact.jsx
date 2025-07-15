import React from "react";

function Contact(){
    return (
        <div className="flex flex-col items-center justify-center pt-5">
            <h1 className="text-5xl font-bold m-5">Contact Us</h1>
            <p>We love to hear back from you for feedback or if you have any issue with items purchaced from  us.</p>
            <form action="https://getform.io/f/9cd7a7fa-4a01-4677-92ab-89e2d68829ae" method="POST"
                className="grid grid-cols-1 w-80 md:w-120 lg:w-150 pt-1">
                <input
                    name="name"
                    className="w-full h-12 border-1 rounded-md mt-3 p-1"
                    type="text"
                    placeholder="Name" 
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email" 
                    className="w-full h-12 border-1 rounded-md mt-3 p-1"
                />
                <textarea
                    name="message"
                    rows="12"
                    placeholder="Message"
                    className="w-full border-1 rounded-md mt-3 p-1"
                />
            
                <button type="submit" 
                    className="w-20 rounded-md p-2 mt-5 text-white bg-linear-to-r from-cyan-500 to-sky-600 drop-shadow-md hover:stroke-white">
                    Send
                </button>
            </form>
        </div>
    )
}

export default Contact;
