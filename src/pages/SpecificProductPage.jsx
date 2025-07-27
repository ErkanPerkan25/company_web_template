import { useStat } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SpecificProduct from "../components/SpecificProduct";
import { useParams } from "react-router-dom";

function SpecificProductPage(){
    const params = useParams();

    return(
        <div>
            <Navbar />
            <SpecificProduct name={params.product}/>
            <Footer />
        </div>
    )
}

export default SpecificProductPage;
