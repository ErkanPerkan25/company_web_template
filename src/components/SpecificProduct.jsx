import { useState, useEffect, useCallback } from "react";
import { apiUrl } from "../api/apiConfig";
import { useParams } from "react-router-dom";

function SpecificProduct({name}){
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const params = useParams();

    console.log(params);

    // Handles quantity number
    const handleQuantity = (e) =>{
        if(quantity == 1){
            if(e.target.value === "+"){
                setQuantity(quantity + 1);
            }
        }
        else{
            if(e.target.value === "+"){
                setQuantity(quantity + 1);
            }
            else{
                setQuantity(quantity - 1);
            }
        }
    }

    const onQuantityChange = (e) =>{
        if(isNaN(e.target.value)){
            setQuantity(1);
        }
    }


    const getItem = useCallback(() =>{
        // Fetching product data
        fetch(`${apiUrl}/products/${params.categroy}/${params.product}`, {
            method: "GET",
            headers: {
                "Authorization": "*",
            }
        })
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
            console.log(error);
        });
    }, [params]);
    
    useEffect(() =>{
        getItem();
    }, [getItem]);

    console.log(product);


    // Waiting phase for loading data from API call, need better fix here
    if(!product){
        return (
            <p>Loading data ...</p>
        )
    }
    else{
        return(
            <div className="flex flex-col md:flex-row m-10 justify-center">
                <div className="w-200 mr-10 border-1 rounded-lg p-10">
                    <img 
                        className="w-125 mr-auto ml-auto rounded-md"
                        src={product.Image_url || "/assets/vecteezy_big-bass-fish.png"} 
                        alt="" 
                    />
                </div>

                <div className="w-120 h-125 flex flex-col mt-auto mb-auto ml-20 p-4 border-2 rounded-lg">
                    <div className="p-5">
                        <h1 className="text-4xl font-bold">{product.Name}</h1>
                        <h3 className="text-3xl ">${product.Price}</h3>
                    </div>
                    <hr />
                    <h1 className="text-sm font-bold mt-5">Quantity: </h1>
                    <div className="m-2 ml-auto mr-auto">
                        <button 
                            onClick={handleQuantity}
                            value="-"
                            className="w-8 h-8 border-1 rounded-md"
                        >
                            -
                        </button>
                        <input type="text" 
                            maxLength={3}
                            pattern="[0-9]{3}" 
                            value={quantity}
                            onChange={onQuantityChange}
                            className="w-10 h-10 m-2 border-1 rounded-md text-center"
                        >
                        </input>
                        <button 
                            className="w-8 h-8 border-1  rounded-md"
                            onClick={handleQuantity}
                            value="+"
                        >
                        +
                        </button>
                    </div>
                    <button className="w-60 h-10 rounded-md ml-auto mr-auto mt-5 text-white font-bold bg-linear-to-r from-cyan-500 to-sky-600 drop-shadow-md hover:stroke-white">
                        ADD TO CART
                    </button>
                    <br/>
                    <div className="mt-10">
                        <h1 className="text-sm font-bold">Shipping & Return</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpecificProduct;
