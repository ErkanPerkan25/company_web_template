import {useState, useEffect} from "react"
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer"
import ProductList from "../components/ProductList"

function Products(){
    return(
        <div>
            <Navbar />
            <div className="w-350 ml-auto mr-auto">
                <ProductList />
            </div>
            <Footer />
        </div>
    )
}

export default Products;
