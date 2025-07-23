import { useState, useEffect, useCallback } from "react";
import { apiUrl } from "../api/apiConfig";

function SpecificProduct({name}){
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);

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


    // Waiting phase for loading data from API call, need better fix here
    if(!product){
        return (
            <p>Loading data ...</p>
        )
    }

    return(
        <div className="flex flex-col md:flex-row m-10 border-2 justify-center">
            <div className="w-150 mr-50">
                <img 
                    className=""
                    src="/assets/vecteezy_big-bass-fish.png" 
                    alt="Vecteezy.com" 
                />
            </div>

            <div className="w-85 h-125 flex flex-col mt-auto mb-auto ml-20 p-4 border-2 rounded-lg">
                <h1 className="text-4xl font-bold">{product.Name}</h1>
                <h3 className="text-3xl ">${product.Price}</h3>

                <div>
                </div>

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
                <button className="w-40 h-10 rounded-md ml-auto mr-auto mt-5 text-white font-bold bg-linear-to-r from-cyan-500 to-sky-600 drop-shadow-md hover:stroke-white">
                    BUY
                </button>
            </div>
        </div>
    )
}

export default SpecificProduct;
