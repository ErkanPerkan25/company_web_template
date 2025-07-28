import { useState } from 'react'
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import ContactPage from './pages/ContactPage'
import SpecificProductPage from "./pages/SpecificProductPage"

import './tailwindcss.css'
import AboutPage from './pages/AboutPage'

function App() {
    // On page load or when changing theme
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("prefers-color-scheme: dark").matches),
    );
    // Whenever explicity choice of light mode
    localStorage.theme = "light";
    // Whenever explicity choice of light mode
    localStorage.theme = "dark";
    // Whenever explicity choice of OS preference
    localStorage.removeItem("theme");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />}/>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products/:category" element={<ProductPage />} />
                <Route path="/products/:category/:product" element={<SpecificProductPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
