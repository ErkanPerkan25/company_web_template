import {useCallback, useEffect, useState} from "react"
import ProductItem from "./ProductItem";
import ProductFilter from "./ProductFilter";
import { apiUrl } from "../api/apiConfig";

function ProductList(){
    const[products, setProducts] = useState([]);
    const[inStock, setInStack] = useState(Boolean);

    const getProducts = useCallback(() =>{
        // Fetching product data
        fetch(`${apiUrl}/products`)
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
                setProducts(data);
                //console.log(products);
            })
            .catch(error =>{
                console.log("Error: " + error);
            });
    }, []);

    useEffect(() =>{
        getProducts();
    }, [getProducts]);
    
    return(
        <div className="flex flex-col pt-5">
            <h1 className="text-5xl text-center font-bold m-5">Products</h1>
            <div className="flex flex-col md:flex-row m-3 p-3">
                <div>
                    <ProductFilter />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {products.map((index,key) =>(
                        <ProductItem
                            key={key}
                            name={index.Name}
                            price={index.Price}
                            url={index.Image_url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList;
