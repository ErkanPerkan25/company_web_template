import { useStat } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SpecificProduct from "../components/SpecificProduct";
import { useParams } from "react-router-dom";

function SpecificProductPage(){
    const {name} = useParams();

    return(
        <div>
            <Navbar />
            <SpecificProduct name={name}/>
            <Footer />
        </div>
    )
}

export default SpecificProductPage;
