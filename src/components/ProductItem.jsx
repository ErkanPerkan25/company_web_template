import {useState} from "react"
import {Link} from "react-router-dom"

function ProductItem({name, price, url}){

    return(
        <div className="w-80 hover:shadow-xl">
            <div className="w-70 h-60 p-2">
                <Link to={`/products/${name}`}>
                    <img 
                        className="mt-5 h-55 ml-auto mr-auto"
                        src={url} 
                        alt=""
                    />
                </Link>
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
