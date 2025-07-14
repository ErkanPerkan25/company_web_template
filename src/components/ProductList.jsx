import {useState} from "react"
import Reels from "../data/FishingReelItems"
import ProductItem from "./ProductItem";
import ProductFilter from "./ProductFilter";

function ProductList(){
    return(
        <div className="flex flex-col md:flex-row m-3 p-3">
            <div>
                <ProductFilter />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {Reels.map((index,key) =>(
                    <ProductItem
                        key={key}
                        title={index.title}
                        cost={index.cost}
                        url={index.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
