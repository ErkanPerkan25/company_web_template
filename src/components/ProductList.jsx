import {useCallback, useEffect, useState} from "react"
import ProductItem from "./ProductItem";
import { apiUrl } from "../api/apiConfig";

function ProductList(){
    const[products, setProducts] = useState([]);
    const[type, setType] = useState(Array);
    const[brand, setBrand] = useState(Array);
    const[priceRange, setPriceRange] = useState(Array);

    const[isInStockChecked, setInStockChecked] = useState(false);
    const[isOnSaleChecked, setOnSaleChecked] = useState(false);

    const getProducts = useCallback(() =>{
        // Fetching product data
        const qType = type.toString();
        fetch(`${apiUrl}/products?type=${qType}&brand=${brand}&price=${priceRange}`)
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
    }, [type, brand]);

    useEffect(() =>{
        if(type || brand){
            getProducts();
        }
        else{
            getProducts();
        }
    }, [brand, type, getProducts]);


    const handleCheckedItem = (e) =>{
        if(e.target.checked){
            if(e.target.id === "typeCheck")
                setType(type.concat(e.target.value));

            if(e.target.id === "brandCheck")
                setBrand(brand.concat(e.target.value));

            if(e.target.id === "priceCheck")
                setPriceRange(priceRange.concat(e.target.value));
        }

        if(!e.target.checked){
            if(e.target.id === "typeCheck"){
                let array = [...type];
                let index = type.indexOf(e.target.value);
                if(index !== -1){
                    array.splice(index,1);
                    setType(array);
                }
            }
            else if(e.target.id === "brandCheck"){
                let array = [...brand];
                let index = brand.indexOf(e.target.value);
                if(index !== -1){
                    array.splice(index,1);
                    setBrand(array);
                }
            }
            else if(e.target.id === "priceCheck"){
                let array = [...priceRange];
                let index = priceRange.indexOf(e.target.value);
                if(index !== -1){
                    array.splice(index,1);
                    setPriceRange(array);
                }
            }
        }
    }
    
    return(
        <div className="flex flex-col pt-5">
            <h1 className="text-5xl text-center font-bold m-5">Products</h1>
            <div className="flex flex-col md:flex-row m-3 p-3">
                <div>
                    <div className="w-80 border-1 rounded-md p-3 m-10">
                        <h2 className="">FILTER BY</h2>
                        <div>
                            <div>
                                <div className="sr-only">
                                    <span className="">Products</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                    </svg>
                                </div>

                                <div>
                                </div>
                                
                            </div>
                            <div>
                                <details open className="not-sr-only m-1">
                                    <summary className="">Availability</summary>
                                    <div className="flex flex-col">
                                        <div className="m-1">
                                            <input className="mr-2" type="checkbox"/>
                                            <label>In Stock</label>
                                        </div>

                                        <div className="m-1">
                                            <input className="mr-2" type="checkbox"/>
                                            <label>Limited Stock</label>
                                        </div>

                                    </div>
                                </details>
                            </div>

                            <div>
                                <details open className="not-sr-only m-1">
                                    <summary className="">Category</summary>

                                    <div className="flex flex-col">
                                        <div className="m-1">
                                            <input className="mr-2" id="typeCheck" type="checkbox" value={"reel"} onChange={handleCheckedItem}/>
                                            <label>Reel</label>
                                        </div>

                                        <div className="m-1">
                                            <input className="mr-2" id="typeCheck" type="checkbox" value={"rod"} onChange={handleCheckedItem}/>
                                            <label>Rod</label>
                                        </div>
                                        
                                        <div className="m-1">
                                            <input className="mr-2" id="typeCheck" type="checkbox" value={"lure"} onChange={handleCheckedItem}/>
                                            <label>Lures</label>
                                        </div>

                                        <div className="m-1">
                                            <input className="mr-2" id="typeCheck" type="checkbox" value={"accessorie"} onChange={handleCheckedItem}/>
                                            <label>Accessories</label>
                                        </div>
                                    </div>
                                </details>
                            </div>

                            <div>
                                <details open className="not-sr-only m-1">
                                    <summary className="">Brand</summary>
                                    <div className="flex flex-col">
                                        <div className="m-1">
                                            <input className="mr-2" id="brandCheck" type="checkbox"  value={"Sheehs"} onChange={handleCheckedItem}/>
                                            <label>Sheehs</label>
                                        </div>

                                        <div className="m-1">
                                            <input className="mr-2" id="brandCheck" type="checkbox" value={"Wow"} onChange={handleCheckedItem}/>
                                            <label>Wow</label>
                                        </div>

                                    </div>
                                </details>
                            </div>

                            <div>
                                <details open className="not-sr-only m-1">
                                    <summary className="">Price</summary>
                                    <div className="flex flex-col">
                                        <input type="range" min={0} max={500} />
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
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
