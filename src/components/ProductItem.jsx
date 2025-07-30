import {useState} from "react"
import {Link, useParams} from "react-router-dom"

function ProductItem({name, price, url}){
    const params = useParams();
    console.log(params);

    return(
        <div className="w-80 hover:shadow-xl rounded-lg">
            <div className="w-70 h-60 p-2 ml-auto mr-auto">
                <Link to={`/products/${params.category}/${name}`}>
                    <img 
                        className="mt-5 h-55 ml-auto mr-auto"
                        src={url} 
                        alt="lure img"
                />
            </Link>
            </div>
            <div className="m-5 p-3">
                <h1 className="text-lg">{name}<br/></h1>
                <h3 className="text-lg font-bold">${price}</h3>
                <button 
                    className="w-15 h-8 rounded-md text-white bg-linear-to-r from-cyan-500 to-sky-600 drop-shadow-md hover:stroke-white"
                >
                BUY 
                </button>
            </div>
        </div>
    )
}

export default ProductItem;
