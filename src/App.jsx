import { useState } from 'react'
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route, useSearchParams} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import ContactPage from './pages/ContactPage'
import SpecificProductPage from "./pages/SpecificProductPage"

import './tailwindcss.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />}/>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products/:name" element={<SpecificProductPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
