import {useState} from "react"

function CategoryCard({title, url}){
    return(
        <div className="relative m-10 border-solid border-4 shadow-2xl rounded-2xl">
            <img
                className="w-80 h-full object-cover rounded-xl"
                src={url} 
            />
            <div className="w-80 h-20 bg-stone-800/75 bottom-0 absolute right-auto left-auto text-white text-center">
                <h1 className="text-bold text-2xl mt-5">{title}</h1>
            </div>
        </div>
    )
}

export default CategoryCard;
