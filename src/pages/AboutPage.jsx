import {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

function AboutPage(){
    return(
        <div>
            <Navbar />
                <AboutContent />
            <Footer />
        </div>
    )
}

export default AboutPage;
