import {useState} from "react"
import Categories from "../data/CategoryItems"
import CategoryCard from "./CategoryCard"

function HomeContent(){
    return(
        <div className="m-5">
            <h1 className="text-black text-center text-4xl font-bold">Shop the gear you need</h1>
            <div className="flex flex-row justify-center p-5">
            {Categories.map((item,key )=>(
                <CategoryCard
                    title={item.title} 
                    url={item.url}
                    key={key}
                />
            ))}
            </div>
        </div>
    );
}

export default HomeContent;
