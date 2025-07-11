import {useState} from "react"
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer"
import VideoShow from "../components/VideoShow"
import HomeContet from "../components/HomeContent"
import HomeAbout from "../components/HomeAbout"

function Home(){
    return(
        <div className="">
            <Navbar />
            <VideoShow />
            <HomeContet />
            <HomeAbout />
            <Footer />
        </div>
    )
}

export default Home;
