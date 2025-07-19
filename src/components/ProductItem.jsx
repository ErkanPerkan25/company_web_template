import {useCallback, useState, useEffect} from "react"
import { apiUrl } from "../api/apiConfig";

function ProductItem({name, price, url}){
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
                //console.log(data);
                setProduct(data);
                //console.log(products);
            })
            .catch(error =>{
                console.log("Error: " + error);
            });
    }, [name]);
    
    /*
    useEffect(() =>{
        getItem();
    }, [getItem]);
    */

    return(
        <div className="w-80 hover:shadow-xl">
            <div className="w-70 h-60 p-2">
                <a href="#">
                    <img 
                        className="mt-5 h-55 ml-auto mr-auto"
                        src={url} 
                        alt=""
                    />
                </a>
            </div>
            <div className="m-5 p-3">
                <h1 className="text-lg">{name}<br/></h1>
                <h3 className="text-lg font-bold">${price}</h3>
                <button 
                    className="w-15 h-8 bg-cyan-600 text-white font-bold"
                >
                BUY 
                </button>
            </div>
        </div>
    )
}

export default ProductItem;
