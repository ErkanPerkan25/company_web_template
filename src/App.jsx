import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar.jsx" 
import Footer from "./components/Footer.jsx"
import './tailwindcss.css'

function App() {

    return (
        <>

            <Navbar />
            <Footer />
        </>
    )
}

export default App
