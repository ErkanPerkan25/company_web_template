import { useState, useEffect, useCallback } from "react";
import { apiUrl } from "../api/apiConfig";

function SpecificProduct({name}){
    const [product, setProduct] = useState();

    const getItem = useCallback(() =>{
        // Fetching product data
        fetch(`${apiUrl}/products/${name}`)
            .then(res =>{
                if(!res.ok){
                    throw new Error(`Network response not ok`);
                }
                else{
                    return res.json();
                }
            })
            .then(data =>{
                setProduct(data[0]);
            })
            .catch(error =>{
                console.log("Error: " + error);
            });
    }, [name]);
    
    useEffect(() =>{
        getItem();
    }, [getItem]);

    console.log(product);

    return(
        <div>
            <div>
                <img 
                    className=""
                />
            </div>

            <div>
                <h1></h1>
                <h3></h3>
            </div>
        </div>
    )
}

export default SpecificProduct;
