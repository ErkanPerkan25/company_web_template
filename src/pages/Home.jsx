import {useState} from "react"
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer"
import VideoShow from "../components/VideoShow"
import HomeContet from "../components/HomeContent"

function Home(){
    return(
        <div className="">
            <Navbar />
            <VideoShow />
            <HomeContet />
            <Footer />
        </div>
    )
}

export default Home;
