import {useState} from "react"
import { Link } from "react-router-dom";

function CategoryCard({title, url, type}){
    return(
        <div className="relative m-10 border-solid border-4 shadow-2xl rounded-2xl transform transtion duration-200 ease-in-out hover:scale-108">
            <Link to={`/products/${type}`}>
                <img
                    className="w-80 h-full object-cover rounded-xl"
                    src={url} 
                />
                <div className="w-80 h-20 bg-stone-800/75 bottom-0 absolute right-auto left-auto text-white text-center">
                    <h1 className="font-bold text-2xl mt-5">{title}</h1>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard;
