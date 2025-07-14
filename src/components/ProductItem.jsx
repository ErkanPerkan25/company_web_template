import {useState} from "react"

function ProductItem({title, cost, url}){
    return(
        <div className="w-80 hover:shadow-xl">
            <div className="w-70 h-60 p-2">
                <img 
                    className="mt-5 h-55 ml-auto mr-auto"
                    src={url} 
                    alt=""
                />
            </div>
            <div className="m-5 p-3">
                <h1 className="text-lg">{title}<br/></h1>
                <h3 className="text-lg font-bold">${cost}</h3>
                <button 
                    className="w-15 h-8 bg-cyan-600 text-white font-bold"
                >
                    BUY 
                </button>
                <button
                    className="w-18 h-8 bg-cyan-600 text-white font-bold float-right"
                    href="#"
                >
                DETAILS
                </button>
            </div>
        </div>
    )
}

export default ProductItem;
