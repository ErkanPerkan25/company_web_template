import { useState } from 'react'
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import './tailwindcss.css'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
