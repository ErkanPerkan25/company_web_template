import {useState} from "react"
import Navbar from "../components/Navbar.jsx" 
import Footer from "../components/Footer.jsx"
import VideoShow from "../components/VideoShow"

function Home(){
    return(
        <div>
            <Navbar />
            <VideoShow />
            <Footer />
        </div>
    )
}

export default Home;
